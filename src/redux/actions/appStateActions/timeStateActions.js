import { CHANGE_DATA, CHANGE_WEEK } from "../../types/appStateTypes/timeStateTypes";


export const changeData = (direction) => ({
    type: CHANGE_DATA,
    payload: direction
})

export const changeWeek = () => ({
    type: CHANGE_WEEK,
})