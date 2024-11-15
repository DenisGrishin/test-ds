import React from 'react'
import { TypeMenuFooter } from '../typeFooter'
import { TypeUseResize } from '../../../hooks/useResize.tsx'

interface PropsNavTopFooter {
  menu: TypeMenuFooter[]
  isSizeWindow: TypeUseResize
}
const NavTopFooter: React.FC<PropsNavTopFooter> = ({ menu, isSizeWindow }) => {
  return (
    <div className="top-footer__nav nav-footer">
      <nav className="nav-footer__wrapper">
        {menu.map((category) => (
          <details
            open={isSizeWindow.mobile}
            key={Math.random().toString(36).slice(2, 9)}
            className="nav-footer__details _details-init"
          >
            <summary className="nav-footer__summary">{category.label}</summary>
            <ul className=" nav-footer__list">
              {category.items.map((item) => (
                <li
                  key={Math.random().toString(36).slice(2, 9)}
                  className="nav-footer__item"
                >
                  <a href={item.url} className="nav-footer__link _hover-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </nav>
    </div>
  )
}

export default NavTopFooter
