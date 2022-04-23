import { ADD_PROJECT, GET_PROJECT } from "../types/projectTypes"

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROJECT: return {...state, [action.payload.projectId]: action.payload.project}
        // case ADD_PROJECT: return {...state, action.payload}
        default: return state
    }
}

export default userReducer