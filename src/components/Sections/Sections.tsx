import React from 'react'
import BannerSection from './BannerSection/BannerSection.tsx'
import { TypeContetnDataApi, TypeProposals } from './typeSections'

import ArticleSection from './ArticleSection/ArticleSection.tsx'
import RunningStringContainer from '../../containers/RunningStringContainer.tsx'
import WebinarsSection from './WebinarsSection/WebinarsSection.tsx'

interface PropsSectionsDataApi {
  data: {
    main: TypeContetnDataApi
    content: TypeContetnDataApi
    proposals: TypeProposals
  }
}
const Sections: React.FC<PropsSectionsDataApi> = ({ data }) => {
  console.log(data)

  return (
    <>
      <BannerSection itemsData={data.main.items} />
      <RunningStringContainer
        ticker={data.main.ticker}
        AddClassName="article"
        numRepeatWord={11}
      />
      <ArticleSection itemsData={data.content.items} />
      <RunningStringContainer
        ticker={data.content.ticker}
        AddClassName="webinars"
        numRepeatWord={20}
      />
      <WebinarsSection proposals={data.proposals} />
      <RunningStringContainer
        ticker={data.proposals.ticker}
        AddClassName="webinars"
        numRepeatWord={17}
      />
    </>
  )
}

export default Sections
