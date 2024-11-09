import React, { ReactElement } from 'react'

interface PropsWrapperImg {
  shapeMask: string
  classNameBlock: string
  children: ReactElement
}
const WrapperImg: React.FC<PropsWrapperImg> = ({
  shapeMask,
  classNameBlock,
  children,
}) => {
  return (
    <div className={`${shapeMask} ${classNameBlock}__img img-block `}>
      {children}
    </div>
  )
}

export default WrapperImg
