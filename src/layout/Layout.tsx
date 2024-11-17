import React, { ReactElement } from 'react'

import HeaderContainer from '../containers/HeaderContainer.tsx'
import FooterContainer from '../containers/FooterContainer.tsx'

import useTheme from '../hooks/useTheme.tsx'

type LayoutProps = {
  children: ReactElement
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDark, toggleTheme } = useTheme()
  const themeLocalStorage = localStorage.getItem('theme')

  if (themeLocalStorage === 'dark') {
    toggleTheme()
  }
  return (
    <div className={`wrapper ${isDark ? 'dark' : 'light'}`}>
      <HeaderContainer />
      <main className="page"> {children}</main>
      <FooterContainer />
    </div>
  )
}
export default Layout
