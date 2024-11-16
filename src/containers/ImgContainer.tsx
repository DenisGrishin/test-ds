import React from 'react'
import withMask from '../hoc/withMask.tsx'
import ImgArticleItem from '../components/common/ArticleItem/ImgArticleItem.tsx'

interface PropsWrapperImg {
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
const ImgContainer: React.FC<PropsWrapperImg> = ({
  propImg,
  classNameBlock,
  stamp,
}) => {
  const MaskedImage = withMask(ImgArticleItem)

  return (
    <MaskedImage
      propImg={propImg}
      classNameBlock={classNameBlock}
      stamp={stamp}
    />
  )
}

export default ImgContainer
