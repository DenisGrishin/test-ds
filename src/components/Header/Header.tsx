import React from "react";

import NavHeader from "./NavHeader.tsx";
import { DataApi } from "../../containers/ContainerHeader.tsx";

interface PropsHeader {
  data: DataApi;
}

const Header: React.FC<PropsHeader> = ({ data }) => {
  return (
    <header data-scroll-show className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          <img src={data.logo} alt="Лого сайта" />
        </a>
        <NavHeader navList={data.nav} />
        <div className="header__right-block">
          <button className="header__btn-search" type="button">
            <img src="../img/icons/searchIcon.svg" alt="Кнопка поиска" />
          </button>
          <a href="#" className="header__link  _hover-link_green">
            <span>EBAC</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
