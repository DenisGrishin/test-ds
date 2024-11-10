import React from 'react'
import HeaderArticleItem from '../../ArticleItem/HeaderArticleItem.tsx'
import { TypeItems } from '../typeSections'
import FootreArticleItem from '../../ArticleItem/FootreArticleItem.tsx'
import Button from '../../Button/Button.tsx'

import ImgContainer from '../../../containers/ImgContainer.tsx'

interface PropsBannerSection {
  itemsData: TypeItems[]
}

const BannerSection: React.FC<PropsBannerSection> = ({ itemsData }) => {
  return (
    <div className="section-banner">
      <div className="section-banner__container decor-line-top ">
        {itemsData.map((it) => {
          if (it.size === 'full-size') {
            return (
              <div
                key={Math.random().toString(36).slice(2, 9)}
                className="section-banner__wpapper"
              >
                <ImgContainer
                  classNameBlock="section-banner"
                  propImg={it.img}
                  stamp={it.stamp}
                />
                <article className="section-banner__block content-block">
                  <HeaderArticleItem
                    title={it.title}
                    tags={it.tags}
                    accent={it.accent}
                    h1OrH2Tag="h1"
                    classNameBlock="content-block"
                  />
                  <div className="content-block__body">
                    <p className="content-block__description  description-article">
                      {it.text}
                    </p>
                    <FootreArticleItem
                      classNameBlock="content-block"
                      date={it.date}
                      duration={it.duration}
                    />
                  </div>
                  <Button
                    text={it['browse-text']}
                    colorBtn="btn-grass"
                    classNameBlock="content-block"
                  />
                </article>
              </div>
            )
          }
          return undefined
        })}
      </div>
    </div>
  )
}

export default BannerSection
