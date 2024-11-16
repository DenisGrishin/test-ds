import React from 'react'
import Input from '../common/Input/Input.tsx'
import Сheckbox from '../common/Input/Сheckbox.tsx'

import Button from '../common/Button/Button.tsx'

interface PropsMailFrom {
  emailPlaceholder: string
  submitText: string
  checkboxText?: string
  valueInput: string
  validClass: {
    inputText: string
    checkbox: string
  }
  isSubmit: boolean
  formClassName: string
  colorBtn: string
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
  formClassName,
  colorBtn,
  isSubmit,
  onSubmit,
  onBlur,
  onChange,
}) => {
  return (
    /* eslint-disable react/jsx-no-useless-fragment */
    <>
      {isSubmit ? (
        <div
          className={`${checkboxText ? 'finish-form' : 'finish-form_no-chckBox'}`}
        >
          Fantástico! Espera
          <br /> La primera carta
        </div>
      ) : (
        <form onSubmit={(e) => onSubmit(e)} className={` ${formClassName}`}>
          <div className={`${formClassName}__wrapper-input`}>
            <div className={`${validClass.inputText}`}>
              <Input
                type="text"
                name="email"
                emailPlaceholder={emailPlaceholder}
                value={valueInput}
                onBlur={(e) => onBlur(e)}
                onChange={(e) => onChange(e)}
              />
            </div>
            {validClass.inputText === '_error' && (
              <div className="text-error">
                Formato de email inválido, verifique
                <br /> a ortografia
              </div>
            )}
          </div>

          <Button text={submitText} isSubmit colorBtn={colorBtn} />

          <div className={`${formClassName}__checkbox`}>
            {checkboxText && (
              <Сheckbox
                onChange={(e) => onChange(e)}
                checkboxText={checkboxText}
                name="confirmations"
                validClass={validClass.checkbox}
              />
            )}
          </div>
        </form>
      )}
    </>
  )
}

export default MailFrom
