import React from 'react'

interface PropsСheckbox {
  checkboxText: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Сheckbox: React.FC<PropsСheckbox> = ({
  checkboxText,
  name,
  onChange,
}) => {
  return (
    <div className="checkbox">
      <input
        onChange={(e) => onChange(e)}
        type="checkbox"
        name={name}
        id="chk-сonfirmation"
      />
      <label htmlFor="chk-сonfirmation" className="checkbox__label">
        <span className="subscribe-form__сonfirmation-text">
          {checkboxText}
        </span>
      </label>
    </div>
  )
}

export default Сheckbox
