import React from 'react'

interface PropsInput {
  type: 'email' | 'text' | 'tel'
  emailPlaceholder: string
  value: string
  idInput?: string
  name: string
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<PropsInput> = ({
  type,
  emailPlaceholder,
  value,
  idInput = '',
  name,
  onBlur,
  onChange,
}) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={emailPlaceholder}
      value={value}
      id={idInput}
      onBlur={(e) => onBlur(e)}
      name={name}
      onChange={(e) => onChange(e)}
    />
  )
}

export default Input
