import { CHANGE_DATA, SET_ACTIVE, SET_OFFSET } from "../../types/appStateTypes/timeStateTypes";


export const changeData = (offset) => ({
    type: CHANGE_DATA,
    payload: offset
})

export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: offset
})

export const setActive = (taskId) => ({
    type: SET_ACTIVE,
    payload: taskId
})