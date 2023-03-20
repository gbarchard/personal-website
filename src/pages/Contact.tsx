import {
  Button,
  Label,
  Spinner,
  Textarea,
  TextInput,
  Toast,
} from 'flowbite-react'
import { useCallback, useState } from 'react'
import Typography from '../components/Typography'

export default function Contact() {
  return (
    <div className="flex justify-center">
      <div className="grow max-w-3xl space-y-12">
        <Typography>
          <h1>Contact</h1>
          <p>TODO</p>
        </Typography>
        <ContactForm />
      </div>
    </div>
  )
}

function ContactForm() {
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [showToast, setShowToast] = useState(false)
  const [isLoading, setisLoading] = useState(false)

  const onSucess = useCallback(() => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }, [])

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)

      formData.append('access_key', '327bb133-4d8c-4689-aae9-67f84568dd9a')

      const object = Object.fromEntries(formData)
      let cancelSubmit = false
      for (const field in object) {
        if (!object[field]) {
          errors[field] = 'Missing Field'
          cancelSubmit = true
        } else if (
          field === 'email' &&
          !object[field].toString().includes('@')
        ) {
          errors[field] = 'Improper Email Address'
          cancelSubmit = true
        } else {
          delete errors[field]
        }
        setErrors({ ...errors })
      }
      if (cancelSubmit) return

      setisLoading(true)
      const json = JSON.stringify(object)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json())

      setisLoading(false)

      if (res.success) {
        onSucess()
      }
    },
    [errors, onSucess]
  )

  return (
    <form noValidate onSubmit={onSubmit}>
      <div className="mb-4">
        <Label htmlFor="name" value="Name" />
        <TextInput
          color={errors.name && 'failure'}
          helperText={errors.name}
          name="name"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="email" value="Email" />
        <TextInput
          color={errors.email && 'failure'}
          helperText={errors.email}
          type="email"
          name="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="message" value="Message" />
        <Textarea
          color={errors.message && 'failure'}
          helperText={errors.message}
          name="message"
        />
      </div>
      <Button className="w-full" disabled={isLoading} type="submit">
        {isLoading ? <Spinner /> : 'Submit'}
      </Button>
      {showToast && (
        <Toast className="fixed bottom-5 right-5">
          Success
          <Toast.Toggle />
        </Toast>
      )}
    </form>
  )
}
