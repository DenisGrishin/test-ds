import React from 'react'
import BannerSection from './BannerSection/BannerSection.tsx'
import { TypeContetnDataApi } from './typeSections'
import RunningString from '../RunningString/RunningString.tsx'

interface PropsSectionsDataApi {
  data: { main: TypeContetnDataApi }
}
const Sections: React.FC<PropsSectionsDataApi> = ({ data }) => {
  return (
    <>
      <BannerSection mainData={data.main} />
      <RunningString ticker={data.main.ticker} AddClassName="article" />
    </>
  )
}

export default Sections
