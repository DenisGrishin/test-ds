import React, { useState } from 'react'
import MailFrom from '../components/MailForm/MailFrom.tsx'
import { postEmailApi } from '../api/api'

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
  checkboxText = '',
  formClassName,
  colorBtn,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    confirmations: false,
  })
  const [validateClass, setValidateClass] = useState({
    inputText: '',
    checkbox: '',
  })
  const [isSubmit, setIsSubmit] = useState(false)
  function validateEmail(email: string) {
    const regExtEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/
    return regExtEmail.test(email)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.email) {
      setValidateClass({
        ...validateClass,
        inputText: '_error-checkbox',
      })
    }

    if (checkboxText && !formData.confirmations) {
      setValidateClass((prev) => {
        return {
          ...prev,
          checkbox: '_error-checkbox',
        }
      })
      return
    }
    postEmailApi(formData.email).then((res) => {
      setIsSubmit(true)
    })
  }

  // валидаци по Blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const isValidate = validateEmail(e.target.value)

    if (!formData.email) {
      setValidateClass({
        ...validateClass,
        inputText: '',
      })
    } else if (isValidate) {
      setValidateClass({
        ...validateClass,
        inputText: '_success',
      })
    } else {
      setValidateClass({
        ...validateClass,
        inputText: '_error-inpt-text',
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type, checked } = e.target

    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })

    if (type === 'text' || type === 'tel' || type === 'email') {
      setValidateClass({
        ...validateClass,
        inputText: validateEmail(value) ? '_success' : '',
      })
    }
    if (type === 'checkbox') {
      setValidateClass({
        ...validateClass,
        checkbox: '',
      })
    }
  }

  return (
    <MailFrom
      isSubmit={isSubmit}
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
