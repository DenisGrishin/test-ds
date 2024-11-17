import { ReactNode, useMemo, useState } from 'react'
import ThemeContext from '../context/ThemeContext.tsx'

interface PropsThemeProvider {
  children: ReactNode
}

const ThemeProvider: React.FC<PropsThemeProvider> = ({ children }) => {
  const themeLocalStorage = localStorage.getItem('theme')

  const [isDark, setIsDark] = useState(
    themeLocalStorage !== null
      ? themeLocalStorage === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const toggleTheme = () => {
    setIsDark((cur) => !cur)
  }

  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export default ThemeProvider
