import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slices/CartSlice'
import CategorySlice from './Slices/CategorySlice'
import SearchSlice from './Slices/SearchSlice'

export const store = configureStore({

  reducer: {
    cartItem:CartSlice,
    category:CategorySlice,
    search:SearchSlice,
  },
})