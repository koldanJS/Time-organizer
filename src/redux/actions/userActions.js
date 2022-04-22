import axiosHandler from "../../axios/axiosHandler";
import { GET_USER, ADD_USER } from "../types/userTypes";

const getUser = (user) => ({
    type: GET_USER,
    payload: user
})

export function asyncgetUser(userId) {
    return async dispatch => {
        const response = await axiosHandler.get(`/users/${userId}.json`)
        const data = response.data
        dispatch(getUser(data))
    }
}

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
})