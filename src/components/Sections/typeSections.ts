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
