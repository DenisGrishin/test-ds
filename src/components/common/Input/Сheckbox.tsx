import React from 'react'

interface PropsСheckbox {
  checkboxText: string
  name: string
  validClass: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Сheckbox: React.FC<PropsСheckbox> = ({
  checkboxText,
  name,
  validClass,
  onChange,
}) => {
  return (
    <div className={`checkbox ${validClass}`}>
      <input
        onChange={(e) => onChange(e)}
        type="checkbox"
        name={name}
        id="chk-сonfirmation"
      />
      <label htmlFor="chk-сonfirmation" className="checkbox__label ">
        <span className="subscribe-form__сonfirmation-text">
          {checkboxText
            .split(' ')
            .slice(0, checkboxText.length - 3)
            .join(' ')}{' '}
          <a href="#" className="checkbox__сonfirmation-link">
            {checkboxText.split(' ').slice(-3).join(' ')}
          </a>
        </span>
      </label>
    </div>
  )
}

export default Сheckbox
