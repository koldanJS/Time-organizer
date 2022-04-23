import { CHANGE_DATE } from "../../types/appStateTypes/timeStateTypes";


export const changeDate = (direction) => ({
    type: CHANGE_DATE,
    payload: direction
})