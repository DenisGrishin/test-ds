import React from 'react'
import Input from '../common/Input/Input.tsx'
import Сheckbox from '../common/Input/Сheckbox.tsx'

import Button from '../common/Button/Button.tsx'

interface PropsMailFrom {
  emailPlaceholder: string
  submitText: string
  agreementText?: string
}

const MailFrom: React.FC<PropsMailFrom> = ({
  emailPlaceholder,
  submitText,
  agreementText = '',
}) => {
  return (
    <form className="section-subscribe__form subscribe-form">
      <div className="subscribe-form__wrapper-input">
        <Input
          type="text"
          name="email"
          emailPlaceholder={emailPlaceholder}
          onChange={() => true}
          value=""
        />
      </div>
      <Button
        text={submitText}
        isSubmit
        colorBtn="btn-coral-dark"
        classNameBlock="subscribe-form"
      />
      <div className="subscribe-form__checkbox">
        <Сheckbox agreementText={agreementText} name="confirmations" />
      </div>
    </form>
  )
}

export default MailFrom
