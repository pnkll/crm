import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/app-reducer'
import authReducer from './reducers/auth-reducer'
import tasksReducer from './reducers/tasks-reducer'
import usersReducer from './reducers/users-reducer'

const store = configureStore({
  reducer: {
      auth: authReducer,
      app: appReducer,
      users: usersReducer,
      tasks: tasksReducer
  }
})

export default store