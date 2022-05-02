import {ADD_PROJECT, GET_PROJECTS} from '../types/projectTypes'
import axiosHandler from '../../axios/axiosHandler'

const getProjects = (projects) => ({
    type: GET_PROJECTS,
    payload: {...projects}
})

export function asyncGetProjects(projectsId) {
    return async dispatch => {
        console.log('getProjects')
        const projectsUrls = projectsId.map(projectId => `/projects/${projectId}.json`)
        const promises = projectsUrls.map(url => axiosHandler.get(url).then(response => response.data))
        const projectsArr = await Promise.all(promises)
        const projects = {}
        projectsId.forEach((id, index) => {
            projects[id] = projectsArr[index]
        })
        dispatch(getProjects(projects))
    }
}

export const addUser = (project) => ({
    type: ADD_PROJECT,
    payload: project
})