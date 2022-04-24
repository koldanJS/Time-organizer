import { LOADING_DATA, ON_ADD_FORM } from "../../types/appStateTypes/appStateTypes"

export const loadingData = (boolean) => ({
    type: LOADING_DATA,
    payload: boolean
})

export const onAddForm = () => ({
    type: ON_ADD_FORM,
})