import { Toast } from 'flowbite-react'
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

type ToastContextState = {
  toasts: string[]
  setToasts: (toasts: string[]) => void
} | null

const ToastContext = createContext<ToastContextState>(null)

function useToastContextIfAvailable() {
  return useContext(ToastContext)
}

function useToastContext() {
  const context = useToastContextIfAvailable()
  if (context == null) {
    throw new Error('No toast context provided')
  }
  return context
}

export function ToastContextProvider(props: PropsWithChildren) {
  const [toasts, setToasts] = useState<string[]>([])
  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {props.children}
      <Toasts />
    </ToastContext.Provider>
  )
}

function Toasts() {
  const { toasts } = useToastContext()
  return (
    <div className="fixed bottom-5 right-5 space-y-4 w-60">
      {toasts.map((t, i) => (
        <AutoCloseToast key={i}>
          {t}
          <Toast.Toggle />
        </AutoCloseToast>
      ))}
    </div>
  )
}

function AutoCloseToast(props: PropsWithChildren) {
  const [show, setShow] = useState(true)

  useTimeout(() => setShow(false), 3000)

  if (!show) return null
  return <Toast>{props.children}</Toast>
}

export function useToast() {
  const { toasts, setToasts } = useToastContext()
  const sendToast = useCallback(
    (message: string) => {
      toasts.push(message)
      setToasts([...toasts])
    },
    [setToasts, toasts]
  )

  return { sendToast }
}

function useTimeout(fn: () => void, ms: number) {
  useEffect(() => {
    const timer = setTimeout(() => {
      fn()
    }, ms);
    return () => clearTimeout(timer);
  }, [fn, ms]);  
}