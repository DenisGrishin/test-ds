import React from 'react'

interface PropsFinishStepFrom {
  checkboxText: string
}

const FinishStepFrom: React.FC<PropsFinishStepFrom> = ({ checkboxText }) => {
  return (
    <div
      className={`${checkboxText ? 'finish-step' : 'finish-step_no-chckBox'}`}
    >
      Fantástico! Espera
      <br /> La primera carta
    </div>
  )
}

export default FinishStepFrom
