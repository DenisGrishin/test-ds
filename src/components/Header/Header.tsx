import React from "react";

import Navigate from "./Navigate.tsx";

const Header = () => {
  return (
    <header className="header">
      <h1>Найди пару котиков</h1>
      <Navigate />
    </header>
  );
};
export default Header;
