import { ADD_USER } from "../types/userTypes"

const initialUser = {
    id: null,
    info: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        dateOfBirth: null,
        phoneNumber: null,
        company: null,
        photo: null,
    },
    projectsId: [],
    timesSheets: [], //[] или {}
    pendingApproval: [],
    archive: []
}

const initialState = [
    initialUser
]

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER: return [...state, action.payload]
        default: return state
    }
}

export default userReducer