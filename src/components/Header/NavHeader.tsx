import React from 'react'
import { TypeLinks } from './typeHeader'

interface PropsNavHeader {
  navList: TypeLinks[]
}
const NavHeader: React.FC<PropsNavHeader> = ({ navList }) => {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        {navList.map((item) => (
          <li
            key={Math.random().toString(36).slice(2, 9)}
            className="nav__item"
          >
            <a href={item.url} key={item.label} className="nav__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default NavHeader
