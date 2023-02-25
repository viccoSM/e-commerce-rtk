interface Product {
  productId: number,
  quantity: number
}

export type RequestAndResponsePostCart = {
  userId: number,
  date?: string,
  products: Product[]
}

export type ListCartResponse = RequestAndResponsePostCart[]