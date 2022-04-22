import axiosHandler from "../../axios/axiosHandler";
import { GET_USER, ADD_USER } from "../types/userTypes";

const getUser = (json) => ({
    type: GET_USER,
    payload: json
})

export function asyncgetUser(userId) {
    return async dispatch => {
        const response = await axiosHandler.get(`/users/${userId}`)
        const json = await response.json()
        dispatch(getUser(json))
    }
}

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
})