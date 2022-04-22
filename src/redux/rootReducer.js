import {combineReducers} from 'redux'
import someReducer from './reducers/someReducer'
import userReducer from './reducers/userReducer'
import projectReducer from './reducers/projectReducer'
import taskReducer from './reducers/taskReducer'

const rootReducer = combineReducers({
    users: userReducer,
    projects: projectReducer,
    tasks: taskReducer,
    some: someReducer
})

export default rootReducer