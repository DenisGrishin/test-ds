import React from 'react'
import Сheckbox from '../common/Input/Сheckbox.tsx'

import Button from '../common/Button/Button.tsx'
import Preloader from '../common/Preloader/Preloader.tsx'
import InputWithValidation from './InputWithValidation.tsx'

interface PropsMailFrom {
  emailPlaceholder: string
  submitText: string
  checkboxText?: string
  valueInput: string
  validClass: {
    inputText: string
    checkbox: string
  }
  isStateForm: {
    isSubmit: boolean
    isPreloader: boolean
  }

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
  isStateForm,
  onSubmit,
  onBlur,
  onChange,
}) => {
  return (
    /* eslint-disable react/jsx-no-useless-fragment */
    <>
      {isStateForm.isSubmit ? (
        <div
          className={`${checkboxText ? 'finish-form' : 'finish-form_no-chckBox'}`}
        >
          Fantástico! Espera
          <br /> La primera carta
        </div>
      ) : (
        <form onSubmit={(e) => onSubmit(e)} className={`${formClassName}`}>
          {isStateForm.isPreloader && <Preloader />}

          <InputWithValidation
            formClassName={formClassName}
            validClass={validClass.inputText}
            emailPlaceholder={emailPlaceholder}
            valueInput={valueInput}
            onBlur={(e) => onBlur(e)}
            onChange={(e) => onChange(e)}
          />
          <Button text={submitText} isSubmit colorBtn={colorBtn} />
          {checkboxText && (
            <div className={`${formClassName}__checkbox`}>
              <Сheckbox
                onChange={(e) => onChange(e)}
                checkboxText={checkboxText}
                name="confirmations"
                validClass={validClass.checkbox}
              />
            </div>
          )}
        </form>
      )}
    </>
  )
}

export default MailFrom
