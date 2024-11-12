import React from 'react'

interface PropsСheckbox {
  agreementText: string
  name: string
}
const Сheckbox: React.FC<PropsСheckbox> = ({ agreementText, name }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" name={name} id="chk-сonfirmation" />
      <label htmlFor="chk-сonfirmation" className="checkbox__label">
        <span className="subscribe-form__сonfirmation-text">
          {agreementText}
        </span>
      </label>
    </div>
  )
}

export default Сheckbox
