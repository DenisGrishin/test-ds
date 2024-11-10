import ImgContainer from '../../../containers/ImgContainer.tsx'
import FootreArticleItem from '../../ArticleItem/FootreArticleItem.tsx'
import HeaderArticleItem from '../../ArticleItem/HeaderArticleItem.tsx'
import { TypeItems } from '../typeSections'

interface PropsFullImageArticle {
  article: TypeItems
}

const FullImageArticle: React.FC<PropsFullImageArticle> = ({ article }) => {
  const { title, tags, accent, text, date, duration, img, stamp, size } =
    article
  return (
    <div className={`section-wide-article ${size}`}>
      <div className="section-wide-article__container decor-line-bottom">
        <ImgContainer
          classNameBlock="section-wide-article"
          propImg={img}
          stamp={stamp}
        />
        <article className="section-wide-article__article article-wide-item">
          <HeaderArticleItem
            title={title}
            tags={tags}
            accent={accent}
            classNameBlock="section-wide-article"
            sizetitle="big-title"
          />
          <div className="section-wide-article__body">
            <p className="section-wide-article__description description-article">
              {text}
            </p>
            <FootreArticleItem
              classNameBlock="section-wide-article"
              date={date}
              duration={duration}
            />
          </div>
        </article>
      </div>
    </div>
  )
}

export default FullImageArticle
