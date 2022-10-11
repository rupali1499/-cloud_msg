import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reduxNew/slices/slice'

export default configureStore({
        reducer: {
                counter: counterReducer
        }
})

