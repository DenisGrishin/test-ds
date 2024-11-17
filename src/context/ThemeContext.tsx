import React, { createContext, ReactNode, useMemo, useState } from 'react'

interface PropsThemeContext {
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext<PropsThemeContext | undefined>(
  undefined
)

interface PropsThemeProvider {
  children: ReactNode
}
export const ThemeProvider: React.FC<PropsThemeProvider> = ({ children }) => {
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
