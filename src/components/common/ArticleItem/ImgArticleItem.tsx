import React from 'react'

interface PropsImgArticleItem {
  textAlt: string
  srcImg: string
}

const ImgArticleItem: React.FC<PropsImgArticleItem> = ({ textAlt, srcImg }) => {
  return <img loading="lazy" src={srcImg} alt={textAlt} />
}

export default ImgArticleItem
