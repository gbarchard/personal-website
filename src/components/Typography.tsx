import { PropsWithChildren } from 'react'

export default function Typography(
  props: PropsWithChildren<{ className?: string }>
) {
  const { className } = props
  return (
    <div
      className={
        'format lg:format-lg dark:format-invert format-blue max-w-none ' +
        className
      }
    >
      {props.children}
    </div>
  )
}
