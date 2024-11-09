import React, { useEffect, useState } from 'react'
import Sections from '../components/Sections/Sections'
import { getSectionsApi } from '../api/api'

const SectionsContainer: React.FC = () => {
  const [data, setData] = useState()

  useEffect(() => {
    getSectionsApi().then((res) => {
      setData(res)
    })
  }, [])

  if (!data) return undefined

  return <Sections data={data} />
}

export default SectionsContainer
