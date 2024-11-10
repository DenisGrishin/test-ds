import { useLayoutEffect, useState } from 'react'

const useScrollHeader = () => {
  const [isScroll, setIsScroll] = useState('')
  const [lastScroll, setLastScroll] = useState(0)
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

  return isScroll
}
export default useScrollHeader
