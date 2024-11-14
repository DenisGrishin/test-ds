import React, { useEffect, useState } from 'react'

import { getContactsApi, getMenuApi } from '../api/api'
import Footer from '../components/Footer/Footer.tsx'

const FooterContainer: React.FC = () => {
  const [data, setData] = useState({
    contacts: {},
  })

  useEffect(() => {
    Promise.all([getMenuApi(), getContactsApi()]).then((res) => {})
  }, [])

  if (!data) return undefined

  return <Footer data={data} />
}

export default FooterContainer
