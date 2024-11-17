import React from 'react'
import useIntlDateTimeFormat from '../../../hooks/useIntlDateTimeFormat.tsx'

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
  const newDate = useIntlDateTimeFormat(date)

  return (
    <footer className={`${classNameBlock}__footer  footer-article`}>
      <time
        dateTime={date.split('.').reverse().join('-')}
        className="footer-article__date"
      >
        <span>{newDate}</span>
      </time>
      <span className="footer-article__time-read">
        <span>{duration} min</span>
      </span>
    </footer>
  )
}

export default FootreArticleItem
