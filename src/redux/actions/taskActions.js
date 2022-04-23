import {ADD_TASK, GET_TASK} from '../types/taskTypes'
import axiosHandler from '../../axios/axiosHandler'

const getTask = (taskId, task) => ({
    type: GET_TASK,
    payload: {taskId, task}
})

export function asyncGetTask(taskId) {
    return async dispatch => {
        console.log('getTask')
        const response = await axiosHandler.get(`/tasks/${taskId}.json`)
        const task = response.data
        dispatch(getTask(taskId, task))
    }
}

export const addUser = (task) => ({
    type: ADD_TASK,
    payload: task
})