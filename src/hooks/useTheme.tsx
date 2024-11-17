import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext.tsx'

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('"useTheme" error')
  }

  return context
}

export default useTheme
