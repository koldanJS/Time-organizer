import { ADD_TASK, GET_TASK, GET_TASKS } from "../types/taskTypes"

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TASK: return {...state, [action.payload.taskId]: action.payload.task}
        case GET_TASKS: return {...state, ...action.payload}
        // case ADD_TASK: return {...state, action.payload}
        default: return state
    }
}

export default userReducer