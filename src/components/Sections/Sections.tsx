import React from 'react'
import BannerSection from './BannerSection/BannerSection.tsx'
import { TypeContetnDataApi } from './typeSections'

interface SectionsDataApi {
  data: { main: TypeContetnDataApi }
}
const Sections: React.FC<SectionsDataApi> = ({ data }) => {
  debugger
  return (
    <div>
      <BannerSection />
    </div>
  )
}

export default Sections
