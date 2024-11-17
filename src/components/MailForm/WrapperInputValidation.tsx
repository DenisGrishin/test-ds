import React, { ReactNode } from 'react'

interface PropsInputWithValidation {
  formClassName: string
  validClass: string
  children: ReactNode
}

const WrapperInputValidation: React.FC<PropsInputWithValidation> = ({
  formClassName,
  validClass,
  children,
}) => {
  return (
    <div className={`${formClassName}__wrapper-input`}>
      <div className={`${validClass}`}>{children}</div>
      {validClass === '_error-inpt-text' && (
        <div className="text-error">
          Formato de email inválido, verifique
          <br /> a ortografia
        </div>
      )}
    </div>
  )
}

export default WrapperInputValidation
