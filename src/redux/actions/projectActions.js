import {ADD_PROJECT} from '../types/projectTypes'

export const addUser = (project) => ({
    type: ADD_PROJECT,
    payload: project
})