import axiosHandler from "../../axios/axiosHandler";
import { GET_USER, ADD_USER } from "../types/userTypes";

const getUser = (user) => ({
    type: GET_USER,
    payload: user
})

export function asyncGetUser(userId) {
    return async dispatch => {
        console.log('getUser')
        const response = await axiosHandler.get(`/users/${userId}.json`)
        const user = response.data
        dispatch(getUser(user))
        return user.projectsId
    }
}

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
})