import React from 'react'
import searchIcon from '../../assets/img/icons/searchIcon.svg'

const HeaderRightBlock: React.FC = () => {
  return (
    <div className="header__right-block">
      <button className="header__btn-search" type="button">
        <img src={searchIcon} alt="Кнопка поиска" />
      </button>
      <a href="#" className="header__link  _hover-link_green">
        <span>EBAC</span>
      </a>
    </div>
  )
}

export default HeaderRightBlock
