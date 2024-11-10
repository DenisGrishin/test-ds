import React, { useEffect, useState } from 'react'
import { getMenuApi } from '../api/api'
import { DataApi } from '../components/Header/typeHeader'
import Header from '../components/Header/Header.tsx'
import useScrollHeader from '../hooks/useScrollHeader.tsx'

const HeaderContainer: React.FC = () => {
  const [data, setData] = useState<DataApi>({ nav: [], logo: '' })
  const isScroll = useScrollHeader()
  useEffect(() => {
    getMenuApi().then((res) => setData({ nav: res.header, logo: res.logo }))
  }, [])

  if (!data) return undefined

  return <Header data={data} isScroll={isScroll} />
}

export default HeaderContainer
