import {combineReducers} from 'redux'
import appStateReducer from './reducers/appStateReducers/appStateReducer'
import userReducer from './reducers/userReducer'
import projectReducer from './reducers/projectReducer'
import taskReducer from './reducers/taskReducer'
import timeStateReducer from './reducers/appStateReducers/timeStateReducer'

const rootReducer = combineReducers({
    appState: appStateReducer,
    user: userReducer,
    projects: projectReducer,
    tasks: taskReducer,
    timeState: timeStateReducer
})

export default rootReducer