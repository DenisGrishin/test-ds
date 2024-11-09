import React from 'react'

const HeaderRightBlock = () => {
  return (
    <div className="header__right-block">
      <button className="header__btn-search" type="button">
        <img src="../img/icons/searchIcon.svg" alt="Кнопка поиска" />
      </button>
      <a href="#" className="header__link  _hover-link_green">
        <span>EBAC</span>
      </a>
    </div>
  )
}

export default HeaderRightBlock
