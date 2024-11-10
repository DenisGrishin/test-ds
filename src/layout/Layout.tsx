import React, { ReactElement } from 'react'
import Footer from '../components/Footer/Footer.tsx'
import HeaderContainer from '../containers/HeaderContainer.tsx'

type LayoutProps = {
  children: ReactElement
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <main className="page"> {children}</main>
      <Footer />
    </div>
  )
}
export default Layout
