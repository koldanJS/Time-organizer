import { SET_USER, REMOVE_USER, LOADING_DATA, OFF_ADD_FORM, OFF_EDIT_FORM, ON_ADD_FORM, ON_EDIT_FORM, RELOAD_END } from "../../types/appStateTypes/appStateTypes"

const initialState = {
    isLoading: true,
    isAddFormOn: false,
    isEditFormOn: false,
    email: localStorage.getItem('email'),
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'),
    isAuth: !!localStorage.getItem('email'),
    isReload: true
}

const appStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER: {
            localStorage.setItem('email', action.payload.email)
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('userId', action.payload.id)
            return {
                ...state,
                email: action.payload.email,
                token: action.payload.token,
                userId: action.payload.id,
                isAuth: true,
                isReload: false
            }
        }
        case REMOVE_USER: {
            localStorage.clear()
            return {
                ...state,
                email: null,
                token: null,
                userId: null,
                isAuth: false
            }
        }

        case RELOAD_END: return {...state, isReload: false}

        case LOADING_DATA: return {...state, isLoading: action.payload}

        case ON_ADD_FORM: return {...state, isAddFormOn: action.payload}
        case OFF_ADD_FORM: return {...state, isAddFormOn: action.payload}

        case ON_EDIT_FORM: return {...state, isEditFormOn: {index: action.index}}
        case OFF_EDIT_FORM: return {...state, isEditFormOn: action.payload}

        default: return state
    }
}

export default appStateReducer