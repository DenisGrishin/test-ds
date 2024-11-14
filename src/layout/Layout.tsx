import React, { ReactElement } from 'react'

import HeaderContainer from '../containers/HeaderContainer.tsx'
import FooterContainer from '../containers/FooterContainer.tsx'

type LayoutProps = {
  children: ReactElement
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <main className="page"> {children}</main>
      <FooterContainer />
    </div>
  )
}
export default Layout
