import { NavLink } from "react-router-dom";

const Navigate = () => {
  return (
    <nav className="header__nav nav">
      <NavLink
        className={({ isActive }) => {
          return isActive ? "nav__link  _active" : "nav__link";
        }}
        to="/"
      >
        <span>Правила игры</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "nav__link  _active" : "nav__link";
        }}
        to="/game"
      >
        <span>Играть</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "nav__link  _active" : "nav__link";
        }}
        to="/setting"
      >
        <span>Настройки</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "nav__link  _active" : "nav__link";
        }}
        to="/result"
      >
        <span>Список результатов</span>
      </NavLink>
    </nav>
  );
};

export default Navigate;
