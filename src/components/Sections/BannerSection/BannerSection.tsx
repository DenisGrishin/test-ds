import React from 'react'
import HeaderArticleItem from '../../ArticleItem/HeaderArticleItem.tsx'
import { TypeContetnDataApi } from '../typeSections'
import FootreArticleItem from '../../ArticleItem/FootreArticleItem.tsx'
import Button from '../../Button/Button.tsx'

import WrapperImg from '../../WrapperImg/WrapperImg.tsx'

interface PropsBannerSection {
  mainData: TypeContetnDataApi
}

const BannerSection: React.FC<PropsBannerSection> = ({ mainData }) => {
  console.log(mainData.items[0])

  return (
    <div className="section-banner">
      {mainData.items.map((it) => (
        <div
          key={Math.random().toString(36).slice(2, 9)}
          className="section-banner__container decor-line-top "
        >
          <WrapperImg
            classNameBlock="content-block"
            shapeMask={it.img.shape}
            stamp={it.stamp}
          >
            <img
              loading="lazy"
              src={it.img.url}
              width="480"
              height="560"
              alt="Девушка с ноутбуком изучает профессию концепт-художника."
            />
          </WrapperImg>
          <article className="section-banner__block content-block">
            <HeaderArticleItem
              title={it.title}
              tags={it.tags}
              accent={it.accent}
              colorTextTag="color-grass"
              h1OrH2Tag="h1"
              classNameBlock="content-block"
            />
            <div className="content-block__body">
              <p className="content-block__description  description-article">
                {it.text}
              </p>
              <FootreArticleItem date={it.date} duration={it.duration} />
            </div>
            <Button
              text={it['browse-text']}
              colorBtn="btn-grass"
              classNameBlock="content-block"
            />
          </article>
        </div>
      ))}
    </div>
  )
}

export default BannerSection
