import axiosHandler from "../../axios/axiosHandler";
import { GET_USER, SET_ACTIVE } from "../types/userTypes";

const getUser = (user) => ({
    type: GET_USER,
    payload: user
})

export function asyncGetUser(userId) {
    return async dispatch => {
        const response = await axiosHandler.get(`/users/${userId}.json`)
        const user = response.data
        dispatch(getUser(user))
        return {
            projectsId: user.projectsId,
            tasksId: user.tasksId
        }
    }
}

export const setActive = (newActiveEntry) => ({
    type: SET_ACTIVE,
    payload: newActiveEntry
})