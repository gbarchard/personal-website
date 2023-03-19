import { PropsWithChildren } from 'react'

export default function Typography(props: PropsWithChildren) {
  return (
    <div className="format lg:format-lg dark:format-invert format-blue">
      {props.children}
    </div>
  )
}
