import React from 'react'
import useIntlDateTimeFormat from '../../../../hooks/useIntlDateTimeFormat.tsx'

interface PropsFooterCardWebinars {
  dateFrom: string
  dateTo: string
  tags: string[]
  time: string
}

const FooterCardWebinars: React.FC<PropsFooterCardWebinars> = ({
  dateFrom,
  dateTo,
  tags,
  time,
}) => {
  const newDateFrom = useIntlDateTimeFormat(dateFrom)
  const newDateTo = useIntlDateTimeFormat(dateTo)
  return (
    <div className="item-card__footer footre-card">
      <div className="footre-card__top">
        {tags.map((tag) => (
          <span key={Math.random().toString(36).slice(2, 9)}>{tag}</span>
        ))}
      </div>
      <div className="footre-card__bottom">
        <span className="footre-card__date">
          <span>
            {newDateFrom}, {newDateTo}
          </span>
        </span>
        <span className="footre-card__time">
          <span>{time}</span>
        </span>
      </div>
    </div>
  )
}

export default FooterCardWebinars
