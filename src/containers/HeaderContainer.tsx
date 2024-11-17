import React, { useEffect, useLayoutEffect, useState } from 'react'
import { getMenuApi } from '../api/api'
import { TypeHeaderApi } from '../components/Header/typeHeader'
import Header from '../components/Header/Header.tsx'
import useTheme from '../hooks/useTheme.tsx'

const HeaderContainer: React.FC = () => {
  const [data, setData] = useState<TypeHeaderApi | null>(null)

  const [isScroll, setIsScroll] = useState('')
  const [lastScroll, setLastScroll] = useState(0)
  const { isDark, toggleTheme } = useTheme()
  useLayoutEffect(() => {
    const handleScroll = () => {
      const currnetScroll = window.scrollY
      if (lastScroll < currnetScroll) {
        setIsScroll('_header-scroll')
      } else {
        setIsScroll('_header-scroll _header-show')
      }
      if (currnetScroll === 0) {
        setIsScroll('')
      }
      setLastScroll(window.scrollY)
    }
    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  useEffect(() => {
    getMenuApi().then((res) => setData({ nav: res.header, logo: res.logo }))
  }, [])

  if (!data) return undefined

  return (
    <Header
      data={data}
      isScroll={isScroll}
      toggleTheme={toggleTheme}
      isDark={isDark}
    />
  )
}

export default HeaderContainer
