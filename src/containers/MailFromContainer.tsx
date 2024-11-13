import React, { useState } from 'react'
import MailFrom from '../components/MailForm/MailFrom.tsx'

interface PropsMailFromContainer {
  emailPlaceholder: string
  submitText: string
  checkboxText?: string
}

const MailFromContainer: React.FC<PropsMailFromContainer> = ({
  emailPlaceholder,
  submitText,
  checkboxText,
}) => {
  const [valueInput, setValueInput] = useState('')
  const [validClass, setValidClass] = useState('')

  function validateEmail(email: string) {
    const regExtEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/

    return regExtEmail.test(email)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const isValid = validateEmail(e.target.value)

    if (!valueInput) {
      setValidClass('')
    } else if (isValid) {
      setValidClass('_correct')
    } else {
      setValidClass('_error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value)
    setValidClass(validateEmail(e.target.value) ? '_correct' : '')
  }
  // валидация почты возвращает true / false
  console.log(validClass)

  return (
    <MailFrom
      emailPlaceholder={emailPlaceholder}
      submitText={submitText}
      checkboxText={checkboxText}
      onSubmit={(e) => handleSubmit(e)}
      onBlur={(e) => handleBlur(e)}
      onChange={(e) => handleChange(e)}
      valueInput={valueInput}
      validClass={validClass}
    />
  )
}

export default MailFromContainer
