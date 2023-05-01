import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './taskSlice'
export default configureStore({
  reducer: {
    item : itemSlice
  }
})