import React from 'react'

interface PropsFootreArticleItem {
  duration: number
  date: string
  classNameBlock: string
}

const FootreArticleItem: React.FC<PropsFootreArticleItem> = ({
  date,
  duration,
  classNameBlock,
}) => {
  return (
    <footer className={`${classNameBlock}__footer  footer-article`}>
      <span className="footer-article__date">
        <span>{date}</span>
      </span>
      <span className="footer-article__time-read">
        <span>{duration} min</span>
      </span>
    </footer>
  )
}

export default FootreArticleItem
