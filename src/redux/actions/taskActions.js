import { GET_TASKS } from '../types/taskTypes'
import axiosHandler from '../../axios/axiosHandler'

const getTasks = (tasks) => ({
    type: GET_TASKS,
    payload: tasks
})

export function asyncGetTasks(tasksId) {
    return async dispatch => {
        console.log('getTasks')
        if (tasksId.length === 0) return dispatch(getTasks({})) //Если у пользователя нет задач
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