import { NavLink } from "react-router-dom";
import GameIcon from "../../assets/img/icons/white-gameTwo.svg?react";
import SettingIcon from "../../assets/img/icons/white-setting.svg?react";
import ResultIcon from "../../assets/img/icons/white-podium.svg?react";
import RulesIcon from "../../assets/img/icons/rulesGameIcon.svg?react";

const Navigate = () => {
  return (
    <nav className="header__nav nav">
      <NavLink
        className={({ isActive }) => {
          return isActive ? "nav__link  _active" : "nav__link";
        }}
        to="/"
      >
        <RulesIcon className="nav__icon" />
        <span>Правила игры</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "nav__link  _active" : "nav__link";
        }}
        to="/game"
      >
        <GameIcon className="nav__icon" />
        <span>Играть</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "nav__link  _active" : "nav__link";
        }}
        to="/setting"
      >
        <SettingIcon className="nav__icon" />
        <span>Настройки</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "nav__link  _active" : "nav__link";
        }}
        to="/result"
      >
        <ResultIcon className="nav__icon" />
        <span>Список результатов</span>
      </NavLink>
    </nav>
  );
};

export default Navigate;
