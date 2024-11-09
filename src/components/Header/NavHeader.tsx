import React from 'react'

interface PropsNavHeader {
  navList: { [key: string]: string }[]
}
const NavHeader: React.FC<PropsNavHeader> = ({ navList }) => {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        {navList.map((item) => (
          <li className="nav__item">
            <a href={item.link} key={item.label} className="nav__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default NavHeader
