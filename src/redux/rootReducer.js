import {combineReducers} from 'redux'
import someReducer from './reducers/someReducer'
import userReducer from './reducers/userReducer'
import projectReducer from './reducers/projectReducer'
import taskReducer from './reducers/taskReducer'
import timeStateReducer from './reducers/appStateReducers/timeStateReducer'

const rootReducer = combineReducers({
    user: userReducer,
    projects: projectReducer,
    tasks: taskReducer,
    timeState: timeStateReducer,
    some: someReducer
})

export default rootReducer