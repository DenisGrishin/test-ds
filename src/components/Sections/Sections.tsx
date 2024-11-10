import React from 'react'
import BannerSection from './BannerSection/BannerSection.tsx'
import { TypeContetnDataApi } from './typeSections'
import RunningString from '../RunningString/RunningString.tsx'
import ArticleSection from './ArticleSection/ArticleSection.tsx'

interface PropsSectionsDataApi {
  data: { main: TypeContetnDataApi; content: TypeContetnDataApi }
}
const Sections: React.FC<PropsSectionsDataApi> = ({ data }) => {
  console.log(data)

  return (
    <>
      <BannerSection itemsData={data.main.items} />
      <RunningString
        ticker={data.main.ticker}
        AddClassName="article"
        numRepeatWord={11}
      />
      <ArticleSection itemsData={data.content.items} />
      <RunningString
        ticker={data.content.ticker}
        AddClassName="webinars"
        numRepeatWord={20}
      />
    </>
  )
}

export default Sections
