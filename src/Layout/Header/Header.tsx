import React from "react";

import Navigate from "./Navigate.tsx";

const Header = () => {
  return (
    <header className="header">
      <h1>Игра: найди пару скрытых картинок</h1>
      <Navigate />
    </header>
  );
};
export default Header;
