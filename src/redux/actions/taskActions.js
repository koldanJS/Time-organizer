import {ADD_TASK, GET_TASKS} from '../types/taskTypes'
import axiosHandler from '../../axios/axiosHandler'

const getTasks = (tasks) => ({
    type: GET_TASKS,
    payload: {...tasks}
})

export function asyncGetTasks(tasksId) {
    return async dispatch => {
        console.log('getTasks')
        const tasksUrls = tasksId.map(taskId => `/tasks/${taskId}.json`)
        const promises = tasksUrls.map(url => axiosHandler.get(url).then(response => response.data))
        const tasksArr = await Promise.all(promises)
        const tasks = {}
        tasksId.forEach((id, index) => {
            tasks[id] = tasksArr[index]
        })
        dispatch(getTasks(tasks))
    }
}

export const addUser = (task) => ({
    type: ADD_TASK,
    payload: task
})