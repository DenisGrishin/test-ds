import React, { useLayoutEffect, useState } from 'react'
import RunningString from '../components/RunningString/RunningString.tsx'
import { TypeTicker } from '../components/Sections/typeSections'

interface PropsRunningString {
  ticker: TypeTicker
  AddClassName: string
  numRepeatWord: number
}
const RunningStringContainer: React.FC<PropsRunningString> = ({
  ticker,
  AddClassName,
  numRepeatWord,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  // нужно для того чтобы анимация бегущей строки работала без скачков, делаем задержку при запуске чтобы браузер высчитал нужные координаты
  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  }, [])

  return (
    <RunningString
      ticker={ticker}
      AddClassName={AddClassName}
      numRepeatWord={numRepeatWord}
      isLoaded={isLoaded}
    />
  )
}

export default RunningStringContainer
