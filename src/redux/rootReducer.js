import {combineReducers} from 'redux'
import someReducer from './reducers/someReducer'

const rootReducer = combineReducers({
    some: someReducer
})

export default rootReducer