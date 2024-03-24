export interface ProductItem {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  added?: boolean
}

export interface ProductItemV2 {
  id: string
  title: string
  description: string
  price: number
  image: string
  
  added?: boolean
}
