export interface ICardDaily {
  id: number
  urlImage: string
  title: string
  description: string
}

export interface ICardBenefit {
  id: number
  urlImage: string
  title: string
  description: string
}

interface IBagde {
  id: number
  text: string
  isMounth: boolean
}

export interface IPlan {
  id: number
  bagde: IBagde[]
  title: string
  perMounth: string
  totalCounts: string
  checkList: string[]
  isPay: boolean
}

export interface ICategory {
  id: number
  url: string
  title: string
  bgCard: string
}
