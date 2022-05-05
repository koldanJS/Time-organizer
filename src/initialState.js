const description = {
    //Разделить Header и другие компоненты не на правый-левый, а с помощью space-between, а также сделать ссылки в header в списке, а меню пользователя - кнопкой
    //Если с текущими проектами и задачами сохранять время, а после удалить задачи или проекты, все собьется. Предупреждающее сообщение + удаление
    //Добавить всплывающие оповещения о разных действиях (Сделано не везде)
    //Добавить в Time данные об исполнителе и ключ (или удалить эти поля), то же с календарем, день/неделя и др (не все сделано)
}

export const newUser = {
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
    tasksId: ['-N0Fz6ZYH3b5uss0IvEb', '-N0FzAcRdvYvOw0i_x2_', '-N0FzCagpefDYUDYnzD1', '-N0FzD332ESvhgc-8N-Y', '-N0FzDYHZHP-SwKEINJA'],
    activeEntry: {timesSheetId: '2022-4-26', entryNumber: 1},
    timesSheets: {
        '2022-4-23': [ //POST запрос не допускает поля с точечной нотацией
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0Fz6ZYH3b5uss0IvEb', description: 'some discription1', totalTime: 140, isActive: false},
            {projectId: '-N0G-322Zx1NeCeEB2j8', taskId: '-N0FzD332ESvhgc-8N-Y', description: 'some2', totalTime: 250, isActive: false},
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0FzAcRdvYvOw0i_x2_', description: 'some discription3', totalTime: 80, isActive: false},
            {projectId: '-N0G-322Zx1NeCeEB2j8', taskId: '-N0FzDYHZHP-SwKEINJA', description: 'some4', totalTime: 20, isActive: false},
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0FzCagpefDYUDYnzD1', description: 'some discription5', totalTime: 120, isActive: false}
        ],
        '2022-4-24': [
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0Fz6ZYH3b5uss0IvEb', description: 'some discription1', totalTime: 256, isActive: false},
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0FzAcRdvYvOw0i_x2_', description: 'some discription3', totalTime: 320, isActive: true},
            {projectId: '-N0G-322Zx1NeCeEB2j8', taskId: '-N0FzDYHZHP-SwKEINJA', description: 'some4', totalTime: 10, isActive: false},
            {projectId: '-N0G-322Zx1NeCeEB2j8', taskId: '-N0FzD332ESvhgc-8N-Y', description: 'some2', totalTime: 100, isActive: false},
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0FzCagpefDYUDYnzD1', description: 'some discription5', totalTime: 80, isActive: false}
        ],
        '2022-4-25': [
            {projectId: '-N0G-322Zx1NeCeEB2j8', taskId: '-N0FzD332ESvhgc-8N-Y', description: 'some2', totalTime: 300, isActive: false},
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0FzAcRdvYvOw0i_x2_', description: 'some discription3', totalTime: 50, isActive: false},
            {projectId: '-N0G-322Zx1NeCeEB2j8', taskId: '-N0FzDYHZHP-SwKEINJA', description: 'some4', totalTime: 80, isActive: false},
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0Fz6ZYH3b5uss0IvEb', description: 'some discription1', totalTime: 120, isActive: false},
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0FzCagpefDYUDYnzD1', description: 'some discription5', totalTime: 180, isActive: false}
        ],
        '2022-4-26': [
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0Fz6ZYH3b5uss0IvEb', description: 'some discription1', totalTime: 110, isActive: false},
            {projectId: '-N0G-322Zx1NeCeEB2j8', taskId: '-N0FzD332ESvhgc-8N-Y', description: 'some2', totalTime: 90, isActive: false},
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0FzAcRdvYvOw0i_x2_', description: 'some discription3', totalTime: 60, isActive: false},
            {projectId: '-N0G-322Zx1NeCeEB2j8', taskId: '-N0FzDYHZHP-SwKEINJA', description: 'some4', totalTime: 30, isActive: false},
            {projectId: '-N0G-0aJliVmC0VbYc8D', taskId: '-N0FzCagpefDYUDYnzD1', description: 'some discription5', totalTime: 240, isActive: false}
        ]
    },
    pendingApproval: [],
    archive: []
}
export const projects = {
    '-N0G-0aJliVmC0VbYc8D': {
        keyName: null,
        projectName: 'Start Project 1',
        createdBy: '-N0KopPM_ruX0sSk49Ni',
        createdTime: Date.now(),
        client: null,
        dates: [],
        description: 'A simple starter project to get started',
        tasksId: ['-N0Fz6ZYH3b5uss0IvEb', '-N0FzAcRdvYvOw0i_x2_', '-N0FzCagpefDYUDYnzD1'] 
    },
    '-N0G-322Zx1NeCeEB2j8': {
        keyName: null,
        projectName: 'Start Project 2',
        createdBy: '-N0KopPM_ruX0sSk49Ni',
        createdTime: Date.now(),
        client: null,
        dates: [],
        description: 'A simple starter project to get started',
        tasksId: ['-N0FzD332ESvhgc-8N-Y', '-N0FzDYHZHP-SwKEINJA'] 
    }
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