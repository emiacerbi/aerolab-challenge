import { ReactNode } from 'react'

export type User = {
  _id: string
  name: string
  points: number
}

export type Context = {
  user: User
  isLoading: boolean
  handleAddPoints: Function
  handleRedeemProduct: Function
}

export type Children = {
  children: ReactNode
}

export type Img = {
  url: string
  hdUrl: string
}

export type ProductType = {
  img: Img
  _id: string
  name: string
  cost: number
  category: string
}
