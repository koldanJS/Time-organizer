import { LOADING_DATA, OFF_ADD_FORM, ON_ADD_FORM, SET_TIME_UPDATE } from "../../types/appStateTypes/appStateTypes"

const initialState = {
    userId: '-N0KopPM_ruX0sSk49Ni',
    isLoading: true,
    isAddFormOn: false,
    timeUpdate: 0
}

const appStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING_DATA: return {...state, isLoading: action.payload}
        case ON_ADD_FORM: return {...state, isAddFormOn: action.payload}
        case OFF_ADD_FORM: return {...state, isAddFormOn: action.payload}
        case SET_TIME_UPDATE: return {...state, timeUpdate: action.payload}
        default: return state
    }
}

export default appStateReducer