import { ADD_TASK, GET_TASK } from "../types/taskTypes"

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TASK: return {...state, [action.payload.taskId]: action.payload.task}
        // case ADD_TASK: return {...state, action.payload}
        default: return state
    }
}

export default userReducer