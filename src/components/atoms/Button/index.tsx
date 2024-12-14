import React from 'react'
import { Button as AntdButton, ButtonProps } from 'antd'

type Props = ButtonProps

export default function Button({ children, ...props }: Props) {
  return (
    <AntdButton className="h-[40px] bg-primary-5 text-white" {...props}>{children}</AntdButton>
  )
}
