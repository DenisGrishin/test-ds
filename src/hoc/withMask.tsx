import React from 'react'

interface PropswithMask {
  classNameBlock: string
  propImg: {
    url: string
    shape: string
  }
  stamp: {
    position: string
    type: string
    word: string
  }
}
const withMask = (
  WrappedComponent: React.ComponentType<{ srcImg: string; textAlt: string }>
) => {
  return function MaskedImageComponent(props: PropswithMask) {
    const { classNameBlock, stamp, propImg } = props

    return (
      <div
        className={`${propImg.shape} ${stamp.type} ${stamp.position} ${classNameBlock}__img img-block`}
      >
        <WrappedComponent srcImg={propImg.url} textAlt={stamp.word} />
      </div>
    )
  }
}

export default withMask
