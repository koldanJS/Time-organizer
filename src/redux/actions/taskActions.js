import {ADD_TASK} from '../types/taskTypes'

export const addUser = (task) => ({
    type: ADD_TASK,
    payload: task
})