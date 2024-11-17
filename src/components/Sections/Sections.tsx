import React from 'react'
import BannerSection from './BannerSection/BannerSection.tsx'
import {
  TypeContetnDataApi,
  TypeProposals,
  ExtendedTypeSubscription,
} from './typeSections'

import ArticleSection from './ArticleSection/ArticleSection.tsx'
import RunningStringContainer from '../../containers/RunningStringContainer.tsx'
import WebinarsSection from './WebinarsSection/WebinarsSection.tsx'
import SubscribeSection from './SubscribeSection/SubscribeSection.tsx'

interface PropsSectionsDataApi {
  data: {
    main: TypeContetnDataApi
    content: TypeContetnDataApi
    proposals: TypeProposals
    subscription: ExtendedTypeSubscription
  }
  isDark: boolean
}
const Sections: React.FC<PropsSectionsDataApi> = ({ data, isDark }) => {
  return (
    <>
      <BannerSection itemsData={data.main.items} isDark={isDark} />
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
        AddClassName="subscribe"
        numRepeatWord={17}
      />

      <SubscribeSection subscription={data.subscription} />

      <RunningStringContainer
        ticker={data.subscription.ticker}
        AddClassName="discount"
        numRepeatWord={17}
      />
    </>
  )
}

export default Sections
