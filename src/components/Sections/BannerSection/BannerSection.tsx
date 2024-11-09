import React from 'react'
import HeaderArticleItem from '../../ArticleItem/HeaderArticleItem.tsx'
import { TypeContetnDataApi } from '../typeSections'

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
          <picture className="section-banner__img img-block">
            <source
              srcSet="img/section-banner/section-banner-mobile-img.webp"
              media="(max-width: 767.98px)"
            />
            <source
              srcSet="img/section-banner/section-banner-tablet-img.webp"
              media="(max-width: 1279.98px)"
            />
            <img
              loading="lazy"
              src="img/section-banner/section-banner-img.webp"
              width="480"
              height="560"
              alt="Девушка с ноутбуком изучает профессию концепт-художника."
            />
          </picture>
          <article className="section-banner__block content-block">
            <HeaderArticleItem
              title={it.title}
              tags={it.tags}
              accent={it.accent}
              h1Tag="h2"
              classNameBlock="content-block"
            />
            <div className="content-block__body">
              <p className="content-block__description  description-article">
                ¡Es posible unir la pasión por los dos universos! ¿Habías
                escuchado este término antes? Si no te suena de nada, no te
                sientas mal, el concepto es nuevo. ¡Nosotros te lo explicamos!
              </p>
              <footer className="content-block__footer  footer-article">
                <time className="footer-article__date" dateTime="2022-06-02">
                  <span>2 de junio de 2022</span>
                </time>
                <span className="footer-article__time-read">
                  <span>10 min</span>
                </span>
              </footer>
            </div>
            <button type="button" className="content-block__btn btn-grass">
              <span>Leer el artículo</span>
            </button>
          </article>
        </div>
      ))}
    </div>
  )
}

export default BannerSection
