import React, { useEffect, useState } from 'react'

import { getSectionsApi } from '../api/api'
import Sections from '../components/Sections/Sections.tsx'
import {
  ExtendedTypeSubscription,
  TypeContetnDataApi,
  TypeProposals,
} from '../components/Sections/typeSections'
import useTheme from '../hooks/useTheme.tsx'

interface TypeSectionApi {
  main: TypeContetnDataApi
  content: TypeContetnDataApi
  proposals: TypeProposals
  subscription: ExtendedTypeSubscription
}
const SectionsContainer: React.FC = () => {
  const [data, setData] = useState<TypeSectionApi | null>(null)
  const { isDark } = useTheme()

  useEffect(() => {
    getSectionsApi().then((res) => {
      setData(res)
    })
  }, [])

  if (!data) return undefined

  return <Sections data={data} isDark={isDark} />
}

export default SectionsContainer
