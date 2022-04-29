import {ADD_PROJECT, GET_PROJECT, GET_PROJECTS} from '../types/projectTypes'
import axiosHandler from '../../axios/axiosHandler'

// const getProject = (projectId, project) => ({
//     type: GET_PROJECT,
//     payload: {projectId, project}
// })

// export function asyncGetProject(projectId) {
//     return async dispatch => {
//         console.log('getProject')
//         const response = await axiosHandler.get(`/projects/${projectId}.json`)
//         const project = response.data
//         dispatch(getProject(projectId, project))
//         return project.tasksId
//     }
// }

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
        // console.log('Promise.all - projects', projects)
        dispatch(getProjects(projects))
    }
}

export const addUser = (project) => ({
    type: ADD_PROJECT,
    payload: project
})