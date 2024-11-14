import React from 'react'
import TopFooter from './TopFooter/TopFooter.tsx'

import BottomFooter from './BottomFooter/BottomFooter.tsx'
import { TypeContacts } from './typeFooter'

interface PropsFooter {
  data: TypeContacts
}
const Footer: React.FC<PropsFooter> = ({ data }) => {
  console.log(data)
  return (
    <footer className="footer">
      <div className="footer__container">
        <TopFooter />
        <BottomFooter data={data} />
      </div>
    </footer>
  )
}
export default Footer
