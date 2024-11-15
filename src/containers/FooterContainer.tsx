import React, { useEffect, useState } from 'react'

import { getContactsApi, getMenuApi } from '../api/api'
import Footer from '../components/Footer/Footer.tsx'
import { TypeContacts, TypeMenuFooter } from '../components/Footer/typeFooter'
import { useResize } from '../hooks/useResize.tsx'

interface DataApit {
  contacts: TypeContacts
  menu: TypeMenuFooter[]
}
const FooterContainer: React.FC = () => {
  const [data, setData] = useState<DataApit | null>(null)
  const isSizeWindow = useResize()

  useEffect(() => {
    Promise.all([getMenuApi(), getContactsApi()]).then((res) => {
      setData({
        menu: res[0].footer,
        contacts: res[1],
      })
    })
  }, [])

  if (!data) return undefined

  return <Footer data={data} isSizeWindow={isSizeWindow} />
}

export default FooterContainer
