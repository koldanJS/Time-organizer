import { GET_USER, SET_ACTIVE } from "../types/userTypes"

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER: return action.payload
        case SET_ACTIVE: return {...state, activeEntry: action.payload }
        default: return state
    }
}

export default userReducer