import { LOADING_DATA, ON_ADD_FORM, OFF_ADD_FORM, SET_TIME_UPDATE } from "../../types/appStateTypes/appStateTypes"

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

export const setTimeUpdate = (currentTime) => ({
    type: SET_TIME_UPDATE,
    payload: currentTime
})