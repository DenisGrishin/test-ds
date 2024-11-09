import React from 'react'
import { TypeTicker } from '../Sections/typeSections'

interface PropsRunningString {
  ticker: TypeTicker
  AddClassName: string
}

const RunningString: React.FC<PropsRunningString> = ({
  ticker,
  AddClassName,
}) => {
  return (
    <div className={`running-string ${AddClassName}`}>
      <div
        className={`running-string__wrapper `}
        style={{ backgroundColor: ticker.color }}
      >
        <div className="running-string__items marquee reverce">
          <div className="running-string__item">{ticker.text}</div>
          <div className="running-string__item">{ticker.text}</div>
          <div className="running-string__item">{ticker.text}</div>
          <div className="running-string__item">{ticker.text}</div>
          <div className="running-string__item">{ticker.text}</div>
          <div className="running-string__item">{ticker.text}</div>
        </div>
        <div className="running-string__items marquee reverce">
          <div className="running-string__item">{ticker.text}</div>
          <div className="running-string__item">{ticker.text}</div>
          <div className="running-string__item">{ticker.text}</div>
          <div className="running-string__item">{ticker.text}</div>
          <div className="running-string__item">{ticker.text}</div>
          <div className="running-string__item">{ticker.text}</div>
        </div>
      </div>
    </div>
  )
}

export default RunningString
