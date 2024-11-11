import React from 'react'
import { TypeProposals } from '../typeSections'
import Button from '../../Button/Button.tsx'
import CardWebinars from './CardWebinars/CardWebinars.tsx'

interface PropsWebinarsSection {
  proposals: TypeProposals
}

const WebinarsSection: React.FC<PropsWebinarsSection> = ({ proposals }) => {
  const { title, items } = proposals
  return (
    <div className="section-webinars decor-webinars">
      <div className="section-webinars__container">
        <h2 className="section-webinars__title">{title}</h2>

        <Button
          colorBtn="btn-purple"
          text={proposals['browse-all-text']}
          classNameBlock="section-webinars"
        />
        <div className="section-webinars__items item-card">
          {items.map((card) => (
            <CardWebinars
              key={Math.random().toString(36).slice(2, 9)}
              card={card}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WebinarsSection
