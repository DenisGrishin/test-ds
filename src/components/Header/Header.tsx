import React from 'react'

import NavHeader from './NavHeader.tsx'
import { DataApi } from '../../types/index'
import HeaderRightBlock from './HeaderRightBlock.tsx'

interface PropsHeader {
  data: DataApi
}

const Header: React.FC<PropsHeader> = ({ data }) => {
  return (
    <header data-scroll-show className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          <img src={data.logo} alt="Лого сайта" />
        </a>
        <NavHeader navList={data.nav} />
        <HeaderRightBlock />
      </div>
    </header>
  )
}

export default Header
