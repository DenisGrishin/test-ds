export interface TypeContetnDataApi {
  data: { items: TypeItems; ticker: TypeTicker }
}

interface TypeItems {
  accent: string
  browseText: string
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
interface TypeTicker {
  color: string
  text: string
}
