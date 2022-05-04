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
        if (!user.projectsId) user.projectsId = []    //Чтоб у user без проекта был пустой массив проектов, а не undefined
        if (!user.tasksId) user.tasksId = []    //Чтоб у user без задач был пустой массив задач, а не undefined
        if (!user.timesSheets) user.timesSheets = {}    //Чтоб у user без временных таблиц был пустой объект, а не undefined
        if (!user.archive) user.archive = []    //Чтоб у user с пустым архивом был пустой массив задач, а не undefined
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