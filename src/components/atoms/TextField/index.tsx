import React from 'react'
import { Input as AntdInput, InputProps } from 'antd'

type Props = InputProps & {
    label?: string
}

export default function TextField({ label, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-neutrals-neutral-6 text-sm">{label}</span>
      <AntdInput className="h-[40px]" {...props} />
    </div>
  )
}
