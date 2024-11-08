import React from "react";

interface PropsNavHeader {
  navList: { [key: string]: string }[];
}
const NavHeader: React.FC<PropsNavHeader> = ({ navList }) => {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Diseño
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Programación & Data
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Gaming
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Marketing
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Software
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Carrera
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavHeader;
