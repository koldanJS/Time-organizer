import { CHANGE_DATA, SET_ACTIVE } from "../../types/appStateTypes/timeStateTypes";


export const changeData = (direction) => ({
    type: CHANGE_DATA,
    payload: direction
})

export const setActive = (taskId) => ({
    type: SET_ACTIVE,
    payload: taskId
})