import React from 'react'

interface PropsButton {
  text: string
  colorBtn: string
  isSubmit?: boolean
  classNameBlock: string
  //   isBorderInside?: boolean
}

const Button: React.FC<PropsButton> = ({
  text,
  colorBtn,
  isSubmit = false,
  classNameBlock,
}) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`${classNameBlock}__btn  ${colorBtn}`}
    >
      <span>{text}</span>
    </button>
  )
}

export default Button
