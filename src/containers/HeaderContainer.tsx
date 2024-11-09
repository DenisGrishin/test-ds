import React, { useEffect, useState } from 'react'

import { getMenuApi } from '../api/api'
import { DataApi } from '../types/index'
import Header from '../components/Header/Header.tsx'

const HeaderContainer: React.FC = () => {
  const [data, setData] = useState<DataApi>({ nav: [], logo: '' })

  useEffect(() => {
    getMenuApi().then((res) => setData({ nav: res.header, logo: res.logo }))
  }, [])

  return <Header data={data} />
}

export default HeaderContainer
