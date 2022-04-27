import { LOADING_DATA, OFF_ADD_FORM, OFF_EDIT_FORM, ON_ADD_FORM, ON_EDIT_FORM } from "../../types/appStateTypes/appStateTypes"

const initialState = {
    userId: '-N0KopPM_ruX0sSk49Ni',
    isLoading: true,
    isAddFormOn: false,
    isEditFormOn: false,
    timeUpdate: 0
}

const appStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING_DATA: return {...state, isLoading: action.payload}

        case ON_ADD_FORM: return {...state, isAddFormOn: action.payload}
        case OFF_ADD_FORM: return {...state, isAddFormOn: action.payload}

        case ON_EDIT_FORM: return {...state, isEditFormOn: {index: action.index}}
        case OFF_EDIT_FORM: return {...state, isEditFormOn: action.payload}

        default: return state
    }
}

export default appStateReducer