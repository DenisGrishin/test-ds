import React from 'react'

interface PropsInput {
  type: 'email' | 'text' | 'tel'
  emailPlaceholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  idInput?: string
  name: string
}

const Input: React.FC<PropsInput> = ({
  type,
  emailPlaceholder,
  value,
  onChange,
  idInput = '',
  name,
}) => {
  return (
    <div className="block-input">
      <input
        type={type}
        placeholder={emailPlaceholder}
        value={value}
        id={idInput}
        name={name}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

export default Input
