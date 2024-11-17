import React from 'react'
import { TypeAuthorProposals } from '../../typeSections'

interface PropsHeaderCardWebinars {
  author: TypeAuthorProposals
}

const HeaderCardWebinars: React.FC<PropsHeaderCardWebinars> = ({ author }) => {
  const { img, name, position } = author
  return (
    <div className="item-card__header header-card">
      <div className="header-card__avatar">
        <img
          loading="lazy"
          src={img}
          width="64"
          height="64"
          alt="Avatar user"
        />
      </div>
      <div className="header-card__user-info">
        <div className="header-card__name">{name}</div>
        <div className="header-card__post">{position}</div>
      </div>
    </div>
  )
}

export default HeaderCardWebinars
