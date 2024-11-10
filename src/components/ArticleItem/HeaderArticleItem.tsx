import React from 'react'

interface PropsHeaderArticle {
  tags: string[]
  title: string
  classNameBlock: string
  accent: string
  h1OrH2Tag?: 'h1' | 'h2'
}

const HeaderArticleItem: React.FC<PropsHeaderArticle> = ({
  classNameBlock,
  tags,
  title,
  accent,
  h1OrH2Tag = 'h2',
}) => {
  return (
    <header className={`${classNameBlock}__header `}>
      <nav className={`${classNameBlock}__nav `}>
        <ul className={`${classNameBlock}__list nav-article `}>
          {tags.map((tag, indx) => {
            if (indx === 0) {
              return (
                <li
                  key={Math.random().toString(36).slice(2, 9)}
                  className="nav-article__item _active"
                  style={{ backgroundColor: accent }}
                >
                  <span className="nav-article__link">{tag}</span>
                </li>
              )
            }

            return (
              <li
                key={Math.random().toString(36).slice(2, 9)}
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
        <h2 className={`${classNameBlock}__title big-title`}>{title}</h2>
      )}
    </header>
  )
}

export default HeaderArticleItem
