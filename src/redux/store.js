import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/app-reducer'
import authReducer from './reducers/auth-reducer'

const store = configureStore({
  reducer: {
      auth: authReducer,
      app: appReducer
  }
})

export default store