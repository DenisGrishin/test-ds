import React, { ReactElement } from 'react'

interface PropsWrapperImg {
  shapeMask: string
  classNameBlock: string
  children: ReactElement
  stamp: {
    position: string
    type: string
    word: string
  }
}
const WrapperImg: React.FC<PropsWrapperImg> = ({
  shapeMask,
  classNameBlock,
  children,
  stamp,
}) => {
  return (
    <div
      className={`${stamp.position} ${shapeMask} ${stamp.type}  ${classNameBlock}__img img-block circle`}
    >
      {children}
    </div>
  )
}

export default WrapperImg
