import { getDate, getSelectedWeek } from "../../../functions/functions"
import { CHANGE_DATA, CHANGE_WEEK } from "../../types/appStateTypes/timeStateTypes"

// console.log(getDate(0))

const initialState = {
    offset: 0,
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
        // case CHANGE_WEEK: return {...state, selectedWeek: getSelectedWeek(state.offset)}
        default: return state
    }
}

export default timeStateReducer