import { SET_TITLE } from "../types/userTypes"

const initialState = {
    title: 'some data'
}

const someReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TITLE: return {...state, title: action.payload}
        default: return state
    }
}

export default someReducer