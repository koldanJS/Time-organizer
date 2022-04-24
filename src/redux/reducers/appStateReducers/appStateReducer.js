import { LOADING_DATA } from "../../types/appStateTypes/appStateTypes"

const initialState = true

const appStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING_DATA: return action.payload
        default: return state
    }
}

export default appStateReducer