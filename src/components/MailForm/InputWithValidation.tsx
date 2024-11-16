import React from 'react'
import Input from '../common/Input/Input.tsx'

interface PropsInputWithValidation {
  formClassName: string
  validClass: string
  emailPlaceholder: string
  valueInput: string
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputWithValidation: React.FC<PropsInputWithValidation> = ({
  formClassName,
  validClass,
  emailPlaceholder,
  valueInput,
  onBlur,
  onChange,
}) => {
  return (
    <div className={`${formClassName}__wrapper-input`}>
      <div className={`${validClass}`}>
        <Input
          type="text"
          name="email"
          emailPlaceholder={emailPlaceholder}
          value={valueInput}
          onBlur={(e) => onBlur(e)}
          onChange={(e) => onChange(e)}
        />
      </div>
      {validClass === '_error-inpt-text' && (
        <div className="text-error">
          Formato de email inválido, verifique
          <br /> a ortografia
        </div>
      )}
    </div>
  )
}

export default InputWithValidation
