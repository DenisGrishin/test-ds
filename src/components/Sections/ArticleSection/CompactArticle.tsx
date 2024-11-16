import React from 'react'
import { TypeItems } from '../typeSections'
import HeaderArticleItem from '../../common/ArticleItem/HeaderArticleItem.tsx'
import FootreArticleItem from '../../common/ArticleItem/FootreArticleItem.tsx'
import ImgContainer from '../../../containers/ImgContainer.tsx'

interface PropsCompactArticle {
  article: TypeItems
}

const CompactArticle: React.FC<PropsCompactArticle> = ({ article }) => {
  const { title, tags, accent, text, date, duration, img, stamp, size } =
    article
  return (
    <article className={`section-articles__item article-item ${size}`}>
      <a href="#" className="article-item__link-img">
        <ImgContainer
          classNameBlock="article-item"
          propImg={img}
          stamp={stamp}
        />
      </a>
      <div className="article-item__contentn">
        <HeaderArticleItem
          title={title}
          tags={tags}
          accent={accent}
          classNameBlock="article-item"
        />
        <p className="article-item__description description-article">{text}</p>
        <FootreArticleItem
          classNameBlock="article-item"
          date={date}
          duration={duration}
        />
      </div>
    </article>
  )
}

export default CompactArticle
