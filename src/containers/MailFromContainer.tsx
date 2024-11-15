import React, { useState } from 'react'
import MailFrom from '../components/MailForm/MailFrom.tsx'

interface PropsMailFromContainer {
  emailPlaceholder: string
  submitText: string
  checkboxText?: string

  colorBtn: string
  formClassName: string
}

const MailFromContainer: React.FC<PropsMailFromContainer> = ({
  emailPlaceholder,
  submitText,
  checkboxText,
  formClassName,
  colorBtn,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    confirmations: false,
  })
  const [validateClass, setValidateClass] = useState('')

  function validateEmail(email: string) {
    const regExtEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/

    return regExtEmail.test(email)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.email && !formData.confirmations) {
      setValidateClass('_error')
    }
  }

  // валидаци по Blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const isValidate = validateEmail(e.target.value)

    if (!formData.email) {
      setValidateClass('')
    } else if (isValidate) {
      setValidateClass('_correct')
    } else {
      setValidateClass('_error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type, checked } = e.target

    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    if (type === 'text' || 'tel' || 'email') {
      setValidateClass(validateEmail(value) ? '_correct' : '')
    }
  }

  return (
    <MailFrom
      emailPlaceholder={emailPlaceholder}
      submitText={submitText}
      checkboxText={checkboxText}
      onSubmit={(e) => handleSubmit(e)}
      onBlur={(e) => handleBlur(e)}
      onChange={(e) => handleChange(e)}
      valueInput={formData.email}
      validClass={validateClass}
      colorBtn={colorBtn}
      formClassName={formClassName}
    />
  )
}

export default MailFromContainer
