import { configureStore } from '@reduxjs/toolkit'


import Cartslice from '../Components/Cartslice'

export const store = configureStore({
  reducer: {
  user:Cartslice
  },
})