import React from 'react'
import Сheckbox from '../common/Input/Сheckbox.tsx'

import Button from '../common/Button/Button.tsx'
import Preloader from '../common/Preloader/Preloader.tsx'
import WrapperInputValidation from './WrapperInputValidation.tsx'
import Input from '../common/Input/Input.tsx'
import FinishStepFrom from './FinishStepFrom.tsx'

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
  if (isStateForm.isSubmit) {
    return <FinishStepFrom checkboxText={checkboxText} />
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} className={`${formClassName}`}>
      {isStateForm.isPreloader && <Preloader />}

      <WrapperInputValidation
        formClassName={formClassName}
        validClass={validClass.inputText}
      >
        <Input
          type="email"
          name="email"
          emailPlaceholder={emailPlaceholder}
          value={valueInput}
          onBlur={(e) => onBlur(e)}
          onChange={(e) => onChange(e)}
        />
      </WrapperInputValidation>

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
  )
}

export default MailFrom
