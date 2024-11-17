import React from 'react'

interface PropsHeaderArticle {
  tags: string[]
  title: string
  classNameBlock: string
  accent: string
  h1OrH2Tag?: 'h1' | 'h2'
  sizetitle?: 'big-title' | 'middle-title'
}

const HeaderArticleItem: React.FC<PropsHeaderArticle> = ({
  classNameBlock,
  tags,
  title,
  accent,
  h1OrH2Tag = 'h2',
  sizetitle = 'middle-title',
}) => {
  return (
    <header className={`${classNameBlock}__header `}>
      <nav className={`${classNameBlock}__nav `}>
        <ul className={`${classNameBlock}__list nav-article `}>
          {tags.map((tag, indx) => {
            if (indx === 0) {
              return (
                <li
                  key={indx}
                  className="nav-article__item _active"
                  style={{ backgroundColor: accent }}
                >
                  <span className="nav-article__link">{tag}</span>
                </li>
              )
            }

            return (
              <li
                key={indx}
                className="nav-article__item "
                style={{ color: accent }}
              >
                <span className="nav-article__link">{tag}</span>
              </li>
            )
          })}
        </ul>
      </nav>
      {h1OrH2Tag === 'h1' ? (
        <h1 className={`${classNameBlock}__title big-title`}>{title}</h1>
      ) : (
        <h2 className={`${classNameBlock}__title ${sizetitle}`}>{title}</h2>
      )}
    </header>
  )
}

export default HeaderArticleItem
