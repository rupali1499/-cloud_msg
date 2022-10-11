import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './slice';

const store = configureStore({
  reducer: {
    counterSlice: counterSlice
  }
})

export default store;