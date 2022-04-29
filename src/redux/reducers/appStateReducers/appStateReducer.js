import { SET_USER, REMOVE_USER, LOADING_DATA, OFF_ADD_FORM, OFF_EDIT_FORM, ON_ADD_FORM, ON_EDIT_FORM } from "../../types/appStateTypes/appStateTypes"

const initialState = {
    isLoading: false,
    isAddFormOn: false,
    isEditFormOn: false,
    timeUpdate: 0,
    email: null,
    token: null,
    userId: null,
    isAuth: false
}

const appStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER: return {
            ...state,
            email: action.payload.email,
            token: action.payload.token,
            userId: action.payload.id,
            isAuth: true
        }
        case REMOVE_USER: return {
            ...state,
            email: null,
            token: null,
            userId: null,
            isAuth: false
        }

        case LOADING_DATA: return {...state, isLoading: action.payload}

        case ON_ADD_FORM: return {...state, isAddFormOn: action.payload}
        case OFF_ADD_FORM: return {...state, isAddFormOn: action.payload}

        case ON_EDIT_FORM: return {...state, isEditFormOn: {index: action.index}}
        case OFF_EDIT_FORM: return {...state, isEditFormOn: action.payload}

        default: return state
    }
}

export default appStateReducer