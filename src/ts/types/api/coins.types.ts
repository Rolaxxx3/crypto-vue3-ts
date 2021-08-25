export type CoinTypes = {
  id: string,
  icon: string,
  name: string,
  symbol: string,
  rank: number,
  price: number,
  priceBtc: number,
  volume: number,
  marketCap: number,
  availableSupply: number,
  totalSupply: number,
  priceChange1h: number,
  priceChange1d: number,
  priceChange1w: number,
  websiteUrl: string,
  twitterUrl: string,
  exp: string[],
}

export type CoinsResponseType = {
  coins: Array<CoinTypes>,
}

export type CoinsRequestType = {
  page: number,
}