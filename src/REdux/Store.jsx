import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import reducer from './reducer/reducer'

const store = createStore(reducer)

// export default store