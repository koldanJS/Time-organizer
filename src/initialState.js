// export const users = {'-N0KopPM_ruX0sSk49Ni': user}

const description = {
    //LeftRightBtn - хорошо поработать над состоянием кнопки, который хранится в компоненте!
}

export const user = {
    info: {
        firstName: 'First',
        lastName: 'User',
        email: null,
        password: null,
        dateOfBirth: null,
        phoneNumber: null,
        company: null,
        photo: null,
    },
    projectsId: ['-N0G-0aJliVmC0VbYc8D', '-N0G-322Zx1NeCeEB2j8'],
    timesSheets: {
        '2022-04-20': [ //POST запрос не допускает поля с точечной нотацией
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0Fz6ZYH3b5uss0IvEb', description: 'some discription', totalTime: '1:30', isActive: false},
            {projectId: '-N0G-322Zx1NeCeEB2j8', taskId: '-N0FzD332ESvhgc-8N-Y', description: 'some discription', totalTime: '2:30', isActive: true},
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0FzAcRdvYvOw0i_x2_', description: 'some discription', totalTime: '1:00', isActive: false},
            {projectId: '-N0G-322Zx1NeCeEB2j8', taskId: '-N0FzDYHZHP-SwKEINJA', description: 'some discription', totalTime: '3:40', isActive: false},
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0FzCagpefDYUDYnzD1', description: 'some discription', totalTime: '0:30', isActive: false},
        ]
    },
    pendingApproval: [],
    archive: []
}

export const project1 = {
    keyName: null,
    projectName: 'Start Project 1',
    createdBy: '-N0KopPM_ruX0sSk49Ni',
    createdTime: Date.now(),
    client: null,
    dates: [],
    description: 'A simple starter project to get started',
    tasksId: ['-N0Fz6ZYH3b5uss0IvEb', '-N0FzAcRdvYvOw0i_x2_', '-N0FzCagpefDYUDYnzD1'] 
}
export const project2 = {
    keyName: null,
    projectName: 'Start Project 2',
    createdBy: '-N0KopPM_ruX0sSk49Ni',
    createdTime: Date.now(),
    client: null,
    dates: [],
    description: 'A simple starter project to get started',
    tasksId: ['-N0FzD332ESvhgc-8N-Y', '-N0FzDYHZHP-SwKEINJA'] 
}

export const task1 = {
    taskName: 'Do something 1',
    projectId: '-N0G-0aJliVmC0VbYc8D',
    createdBy: '-N0KopPM_ruX0sSk49Ni',
    description: 'Exercise of task',
    time: {
        timeTotal: 0,
        timeBase: 0,
        timeRanges: []
    }
}

export const task2 = {
    taskName: 'Do something 2',
    projectId: '-N0G-0aJliVmC0VbYc8D',
    createdBy: '-N0KopPM_ruX0sSk49Ni',
    description: 'Exercise of task',
    time: {
        timeTotal: 0,
        timeBase: 0,
        timeRanges: []
    }
}

export const task3 = {
    taskName: 'Do something 3',
    projectId: '-N0G-0aJliVmC0VbYc8D',
    createdBy: '-N0KopPM_ruX0sSk49Ni',
    description: 'Exercise of task',
    time: {
        timeTotal: 0,
        timeBase: 0,
        timeRanges: []
    }
}

export const task4 = {
    taskName: 'Do something 4',
    projectId: '-N0G-322Zx1NeCeEB2j8',
    createdBy: '-N0KopPM_ruX0sSk49Ni',
    description: 'Exercise of task',
    time: {
        timeTotal: 0,
        timeBase: 0,
        timeRanges: []
    }
}

export const task5 = {
    taskName: 'Do something 5',
    projectId: '-N0G-322Zx1NeCeEB2j8',
    createdBy: '-N0KopPM_ruX0sSk49Ni',
    description: 'Exercise of task',
    time: {
        timeTotal: 0,
        timeBase: 0,
        timeRanges: []
    }
}