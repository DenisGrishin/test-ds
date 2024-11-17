import React from 'react'
import TopFooter from './TopFooter/TopFooter.tsx'

import BottomFooter from './BottomFooter/BottomFooter.tsx'
import { TypeContacts, TypeMenuFooter } from './typeFooter'
import { TypeUseResize } from '../../hooks/useResize.tsx'

interface PropsFooter {
  data: { contacts: TypeContacts; menu: TypeMenuFooter[] }
  isSizeWindow: TypeUseResize
}
const Footer: React.FC<PropsFooter> = ({ data, isSizeWindow }) => {
  const { contacts, menu } = data
  return (
    <footer className="footer">
      <div className="footer__container">
        <TopFooter
          menu={menu}
          subscription={contacts.subscription}
          isSizeWindow={isSizeWindow}
          socialLinks={{
            youtube: contacts.youtube,
            facebook: contacts.facebook,
            linkedIn: contacts.linkedin,
            instagram: contacts.instagram,
          }}
        />
        <BottomFooter contacts={contacts} />
      </div>
    </footer>
  )
}
export default Footer
