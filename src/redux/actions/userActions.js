import { ADD_USER } from "../types/userTypes";

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
})