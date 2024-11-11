export interface TypeContetnDataApi {
  items: TypeItems[]
  ticker: TypeTicker
}

export interface TypeItems {
  accent: string
  ['browse-text']: string
  date: string
  duration: number
  img: {
    url: 'string'
    shape: string
  }
  size: string
  stamp: {
    word: string
    type: string
    position: string
  }
  tags: string[]
  text: string
  title: string
}
export interface TypeTicker {
  color: string
  text: string
}

export interface TypeProposals {
  ['browse-all-text']: string
  items: TypeItemsProposals[]
  ticker: TypeTicker
  title: string
}

export interface TypeItemsProposals {
  author: TypeAuthorProposals
  background: string
  date_from: string
  date_to: string
  tags: string[]
  text: string
  time: string
}

export interface TypeAuthorProposals {
  img: string
  name: string
  position: string
}
