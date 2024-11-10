import React from 'react'
import { TypeTicker } from '../Sections/typeSections'

interface PropsRunningString {
  ticker: TypeTicker
  AddClassName: string
  numRepeatWord: number
}

const RunningString: React.FC<PropsRunningString> = ({
  ticker,
  AddClassName,
  numRepeatWord,
}) => {
  return (
    <div className={`running-string ${AddClassName}`}>
      <div
        className="running-string__wrapper"
        style={{ backgroundColor: ticker.color }}
      >
        {[...Array(numRepeatWord).fill(ticker.text)].map((it) => (
          <div
            key={Math.random().toString(36).slice(2, 9)}
            className="running-string__item"
          >
            <span>{it}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RunningString
