import { ADD_PROJECT } from "../types/projectTypes"

const initialProject = {
    id: 'initialProject',
    keyName: null,
    projectName: 'Start Project',
    createdBy: 'Admin',
    createdTime: Date.now(),
    client: null,
    dates: [],
    description: 'A simple starter project to get started',
    tasksId: [] 
}

const initialState = [
    initialProject
]

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PROJECT: return [...state, action.payload]
        default: return state
    }
}

export default userReducer