import React from 'react'

interface PropsСheckbox {
  checkboxText: string
  name: string
}
const Сheckbox: React.FC<PropsСheckbox> = ({ checkboxText, name }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" name={name} id="chk-сonfirmation" />
      <label htmlFor="chk-сonfirmation" className="checkbox__label">
        <span className="subscribe-form__сonfirmation-text">
          {checkboxText}
        </span>
      </label>
    </div>
  )
}

export default Сheckbox
