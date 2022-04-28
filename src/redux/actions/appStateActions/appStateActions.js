import { SET_AUTORIZED, LOADING_DATA, ON_ADD_FORM, OFF_ADD_FORM, ON_EDIT_FORM, OFF_EDIT_FORM } from "../../types/appStateTypes/appStateTypes"

export const setAutorized = (boolean, userId) => ({
    type: SET_AUTORIZED,
    payload: boolean,
    userId
})

export const loadingData = (boolean) => ({
    type: LOADING_DATA,
    payload: boolean
})

export const onAddForm = () => ({
    type: ON_ADD_FORM,
    payload: true
})

export const offAddForm = () => ({
    type: OFF_ADD_FORM,
    payload: false
})

export const onEditForm = (index) => ({
    type: ON_EDIT_FORM,
    payload: true,
    index
})

export const offEditForm = () => ({
    type: OFF_EDIT_FORM,
    payload: false
})