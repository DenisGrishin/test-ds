import React, { ReactNode } from "react";

import Header from "../components/Header/Header.tsx";

interface PropsLayout {
  children: ReactNode;
}
const Layout: React.FC<PropsLayout> = ({ children }) => {
  return (
    <div className="wrapper wrapper__container">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
