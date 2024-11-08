import React, { ReactElement, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { getMenu } from "../api/api";
type layoutProps = {
  children: ReactElement;
};
const Layout: React.FC<layoutProps> = ({ children }) => {
  const [a, setA] = useState<any>();

  useEffect(() => {
    getMenu()
      .then((data) => {
        debugger;
        setA(data);
      })
      .catch((error) => {
        // Обрабатываем ошибку, если запрос не удался
        console.error(error);
      });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <main> {children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
