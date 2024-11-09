import React from 'react'
import BannerSection from './BannerSection/BannerSection.tsx'
import { TypeContetnDataApi } from './typeSections'

interface PropsSectionsDataApi {
  data: { main: TypeContetnDataApi }
}
const Sections: React.FC<PropsSectionsDataApi> = ({ data }) => {
  return (
    <div>
      <BannerSection mainData={data.main} />
    </div>
  )
}

export default Sections
