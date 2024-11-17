import React from 'react'
import { TypeItems } from '../typeSections'
import CompactArticle from './CompactArticle.tsx'
import FullImageArticle from './FullImageArticle.tsx'

interface PropsArticleSection {
  itemsData: TypeItems[]
}
const ArticleSection: React.FC<PropsArticleSection> = ({ itemsData }) => {
  return (
    <div className="section-articles">
      <div className="section-articles__container decor-line-bottom">
        {itemsData.map((article, indx) => {
          if (article.size === 'compact') {
            return <CompactArticle article={article} key={indx} />
          }
          if (article.size === 'full-image') {
            return <FullImageArticle article={article} key={indx} />
          }
          return undefined
        })}
      </div>
    </div>
  )
}

export default ArticleSection
