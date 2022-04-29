import { getDate, getSelectedWeek } from "../../../functions/functions"
import { CHANGE_DATA, SET_ACTIVE } from "../../types/appStateTypes/timeStateTypes"

// console.log(getDate(0))

const initialState = {
    offset: 0,
    activeTaskId: false,
    currentDate: getDate(),
    selectedDate: getDate(),
    selectedWeek: getSelectedWeek(0)
}

const timeStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_DATA: {
            const newOffset = state.offset + action.payload
            return {
                ...state,
                selectedDate: getDate(newOffset),
                offset: newOffset,
                selectedWeek: getSelectedWeek(newOffset)}
        }
        case SET_ACTIVE: return {...state, activeTaskId: action.payload}
        // case CHANGE_WEEK: return {...state, selectedWeek: getSelectedWeek(state.offset)}
        default: return state
    }
}

export default timeStateReducer