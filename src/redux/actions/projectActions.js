import { GET_PROJECTS } from '../types/projectTypes'
import axiosHandler from '../../axios/axiosHandler'

const getProjects = (projects) => ({
    type: GET_PROJECTS,
    payload: projects
})

export function asyncGetProjects(projectsId) {
    return async dispatch => {
        console.log('getProjects')
        if (projectsId.length === 0) return dispatch(getProjects({})) //Если у пользователя нет проектов
        const projectsUrls = projectsId.map(projectId => `/projects/${projectId}.json`)
        const promises = projectsUrls.map(url => axiosHandler.get(url).then(response => response.data))
        const projectsArr = await Promise.all(promises)
        const projects = {}
        projectsId.forEach((id, index) => {
            projects[id] = projectsArr[index]
            if (!projects[id].tasksId) projects[id].tasksId = []    //Чтоб у проекта без задач был пустой массив задач, а не undefined
        })
        dispatch(getProjects(projects))
    }
}