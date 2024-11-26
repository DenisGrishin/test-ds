import { Outlet } from "react-router-dom";
import Header from "./Header/Header.tsx";

const Layout = () => {
  return (
    <div className="wrapper wrapper__container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
