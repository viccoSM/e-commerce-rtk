import product from '../services/product'
import user from '../services/user'

const rootServices = {
  reducers: {
    [product.reducerPath]: product.reducer,
    [user.reducerPath]: user.reducer,
  },
  middlewares: [
    product.middleware,
    user.middleware,
  ]
}

export default rootServices