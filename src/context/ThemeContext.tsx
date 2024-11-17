import { createContext } from 'react'

interface PropsThemeContext {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<PropsThemeContext | undefined>(undefined)

export default ThemeContext
