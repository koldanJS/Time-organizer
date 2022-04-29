import {ADD_TASK, GET_TASK, GET_TASKS} from '../types/taskTypes'
import axiosHandler from '../../axios/axiosHandler'

// const getTask = (taskId, task) => ({
//     type: GET_TASK,
//     payload: {taskId, task}
// })

// export function asyncGetTask(taskId) {
//     return async dispatch => {
//         console.log('getTask')
//         const response = await axiosHandler.get(`/tasks/${taskId}.json`)
//         const task = response.data
//         dispatch(getTask(taskId, task))
//     }
// }

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
        // console.log('Promise.all - tasks', tasks)
        dispatch(getTasks(tasks))
    }
}

export const addUser = (task) => ({
    type: ADD_TASK,
    payload: task
})