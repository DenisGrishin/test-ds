import React from 'react'
import { TypeItemsProposals } from '../../typeSections'
import HeaderCardWebinars from './HeaderCardWebinars.tsx'
import FooterCardWebinars from './FooterCardWebinars.tsx'

interface PropsCard {
  card: TypeItemsProposals
}

const CardWebinars: React.FC<PropsCard> = ({ card }) => {
  const {
    background,
    author,
    text,
    date_from: dateFrom,
    date_to: dateTo,
    tags,
    time,
  } = card

  return (
    <div className="item-card__item" style={{ backgroundColor: background }}>
      <HeaderCardWebinars author={author} />
      <p className="item-card__description middle-title">{text}</p>
      <FooterCardWebinars
        dateFrom={dateFrom}
        time={time}
        dateTo={dateTo}
        tags={tags}
      />
    </div>
  )
}

export default CardWebinars
