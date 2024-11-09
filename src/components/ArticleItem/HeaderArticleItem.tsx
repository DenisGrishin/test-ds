import React from 'react'

interface PropsHeaderArticle {
  classNameBlock: string
}

const HeaderArticleItem: React.FC<PropsHeaderArticle> = ({
  classNameBlock,
}) => {
  return (
    <header className={`${classNameBlock}__header `}>
      <nav className={`${classNameBlock}__nav nav-article`}>
        <ul
          className={`${classNameBlock}__list nav-article nav-article_color-grass `}
        >
          <li className="nav-article__item _active">
            <span className="nav-article__link">Gaming</span>
          </li>
          <li className="nav-article__item">
            <a className="nav-article__link" href="#">
              Artículo
            </a>
          </li>
          <li className="nav-article__item">
            <a className="nav-article__link" href="#">
              Niños
            </a>
          </li>
          <li className="nav-article__item">
            <a className="nav-article__link" href="#">
              Proyecto
            </a>
          </li>
        </ul>
      </nav>
      <h1 className={`${classNameBlock}__title big-title`}>
        El Artista Técnico, cuando la programación y el diseño de juegos se
        juntan
      </h1>
    </header>
  )
}

export default HeaderArticleItem
