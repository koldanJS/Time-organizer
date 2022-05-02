import { GET_TASKS } from "../types/taskTypes"

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TASKS: return {...state, ...action.payload}
        default: return state
    }
}

export default userReducer