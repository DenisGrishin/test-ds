import React from 'react'
import Input from '../common/Input/Input.tsx'
import Сheckbox from '../common/Input/Сheckbox.tsx'

import Button from '../common/Button/Button.tsx'

interface PropsMailFrom {
  emailPlaceholder: string
  submitText: string
  checkboxText?: string
  valueInput: string
  validClass: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MailFrom: React.FC<PropsMailFrom> = ({
  emailPlaceholder,
  submitText,
  checkboxText = '',
  valueInput,
  validClass,
  onSubmit,
  onBlur,

  onChange,
}) => {
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="section-subscribe__form subscribe-form"
    >
      <div className="subscribe-form__wrapper-input">
        <div className={`subscribe-form__wrapper-input ${validClass}`}>
          <Input
            type="text"
            name="email"
            emailPlaceholder={emailPlaceholder}
            value={valueInput}
            onBlur={(e) => onBlur(e)}
            onChange={(e) => onChange(e)}
          />
        </div>
        {validClass && (
          <div className="text-error">
            Formato de email inválido, verifique
            <br /> a ortografia
          </div>
        )}
      </div>

      <Button text={submitText} isSubmit colorBtn="btn-coral-dark" />

      <div className="subscribe-form__checkbox">
        {checkboxText && (
          <Сheckbox checkboxText={checkboxText} name="confirmations" />
        )}
      </div>
    </form>
  )
}

export default MailFrom
