import { useState, useEffect } from 'react'

const MOBILE = 767.98
const TABLET = 1279.98
const DESKROP = 1439.98

export interface TypeUseResize {
  mobile: boolean
  talet: boolean
  desktop: boolean
}
export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      const target = event.target as Window
      if (target) {
        setWidth(target.innerWidth)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    mobile: width >= MOBILE,
    talet: width >= TABLET,
    desktop: width >= DESKROP,
  }
}
