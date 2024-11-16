import React from 'react'

import NavHeader from './NavHeader.tsx'
import { DataApi } from './typeHeader'
import HeaderRightBlock from './HeaderRightBlock.tsx'
import SwitchThemaButton from '../common/Button/switchThemaButton.tsx'

interface PropsHeader {
  data: DataApi
  isScroll: string
}

const Header: React.FC<PropsHeader> = ({ data, isScroll }) => {
  return (
    <>
      <SwitchThemaButton />
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
