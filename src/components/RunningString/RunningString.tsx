import React from 'react'
import { TypeTicker } from '../Sections/typeSections'

interface PropsRunningString {
  ticker: TypeTicker
  AddClassName: string
  numRepeatWord: number
  isLoaded: boolean
}

const RunningString: React.FC<PropsRunningString> = ({
  ticker,
  AddClassName,
  numRepeatWord,
  isLoaded,
}) => {
  return (
    <div
      className={`running-string ${isLoaded ? 'start-animation' : ''}    ${AddClassName}`}
    >
      <div
        className="running-string__wrapper"
        style={{ backgroundColor: ticker.color }}
      >
        {[...Array(numRepeatWord).fill(ticker.text)].map((it, indx) => (
          <div key={indx} className="running-string__item">
            <span>{it}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RunningString
