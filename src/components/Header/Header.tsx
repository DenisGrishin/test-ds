import React from 'react'

import NavHeader from './NavHeader.tsx'
import { TypeHeaderApi } from './typeHeader'
import HeaderRightBlock from './HeaderRightBlock.tsx'
import SwitchThemaButton from '../common/Button/SwitchThemaButton.tsx'

interface PropsHeader {
  data: TypeHeaderApi
  isScroll: string
  toggleTheme: () => void
  isDark: boolean
}

const Header: React.FC<PropsHeader> = ({
  data,
  isScroll,
  toggleTheme,
  isDark,
}) => {
  return (
    <>
      <SwitchThemaButton toggleTheme={toggleTheme} isDark={isDark} />
      <header className={`header ${isScroll}`}>
        <div className="header__container">
          <a href="#" className="header__logo">
            <img src={data.logo} alt="Лого сайта" />
          </a>
          <NavHeader navList={data.nav} />
          <HeaderRightBlock />
        </div>
      </header>
    </>
  )
}

export default Header
