import {
  Button,
  Label,
  Modal,
  Spinner,
  Textarea,
  TextInput,
} from 'flowbite-react'
import { useCallback, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useToast } from './Toast'
import Typography from './Typography'

export default function Contact() {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <Modal
      show={searchParams.get('contact') === 'true'}
      onClose={() => setSearchParams()}
    >
      <Modal.Header>Contact</Modal.Header>
      <Modal.Body>
        <Typography>
          <p>
            Have a question or just want to chat? Send me a message and I'll get
            back to you as soon as I can.
          </p>
        </Typography>
        <ContactForm />
      </Modal.Body>
    </Modal>
  )
}

function ContactForm() {
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isLoading, setisLoading] = useState(false)
  const { sendToast } = useToast()
  const [, setSearchParams] = useSearchParams()

  const onSucess = useCallback(() => {
    sendToast('Sucess')
  }, [sendToast])

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
      setSearchParams()
      if (res.success) {
        onSucess()
      }
    },
    [errors, onSucess, setSearchParams]
  )

  return (
    <form className="space-y-4" noValidate onSubmit={onSubmit}>
      <div>
        <Label htmlFor="name" value="Name" />
        <TextInput
          color={errors.name && 'failure'}
          helperText={errors.name}
          name="name"
        />
      </div>
      <div>
        <Label htmlFor="email" value="Email" />
        <TextInput
          color={errors.email && 'failure'}
          helperText={errors.email}
          type="email"
          name="email"
          placeholder="name@example.com"
        />
      </div>
      <div>
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
    </form>
  )
}
