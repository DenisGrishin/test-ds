import React from 'react'

interface PropsButton {
  text: string
  colorBtn: string
  isSubmit?: boolean
  //   isBorderInside?: boolean
}

const Button: React.FC<PropsButton> = ({
  text,
  colorBtn,
  isSubmit = false,
  // classNameBlock,
}) => {
  return (
    <button type={isSubmit ? 'submit' : 'button'} className={`${colorBtn}`}>
      <span>{text}</span>
    </button>
  )
}

export default Button
