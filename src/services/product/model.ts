export type DetailProductResponse = {
  id: number
  title: string
  price: number
  category: string,
  description: string,
  image: string
  rating:
    { rate: number, count: number }
}

export type RequestListProduct = {
  params: {
    limit: number
    sort?: string
  }
  category: string | ''
}

export type ListProductResponse = DetailProductResponse[]