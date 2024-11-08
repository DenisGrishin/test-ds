import React, { ReactElement } from "react";
import Footer from "../components/Footer/Footer.tsx";
import ContainerHeader from "../containers/ContainerHeader.tsx";

type LayoutProps = {
  children: ReactElement;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <ContainerHeader />
      <main> {children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
