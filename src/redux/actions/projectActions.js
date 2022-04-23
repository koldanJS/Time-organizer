import {ADD_PROJECT, GET_PROJECT} from '../types/projectTypes'
import axiosHandler from '../../axios/axiosHandler'

const getProject = (projectId, project) => ({
    type: GET_PROJECT,
    payload: {projectId, project}
})

export function asyncGetProject(projectId) {
    return async dispatch => {
        console.log('getProject')
        const response = await axiosHandler.get(`/projects/${projectId}.json`)
        const project = response.data
        dispatch(getProject(projectId, project))
        return project.tasksId
    }
}

export const addUser = (project) => ({
    type: ADD_PROJECT,
    payload: project
})