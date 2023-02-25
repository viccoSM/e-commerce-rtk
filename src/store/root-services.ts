import product from '../services/product'
import user from '../services/user'
import cart from '../services/cart'

const rootServices = {
  reducers: {
    [product.reducerPath]: product.reducer,
    [user.reducerPath]: user.reducer,
    [cart.reducerPath]: cart.reducer,
  },
  middlewares: [
    product.middleware,
    user.middleware,
    cart.middleware,
  ]
}

export default rootServices