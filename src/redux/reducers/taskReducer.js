import { ADD_TASK } from "../types/taskTypes"

const initialTask = {
    id: 'sampleTask',
    taskName: 'Do something',
    projectId: 'initialProject',
    createdBy: 'Admin',  //После при создании проектов, когда пользователь будет добавлять задачи, созданные им ранее будут всплывать в подсказке
    description: 'Exercise of task',
    time: {
        timeTotal: 0,  //Сумма timeBase и всех диапазонов timeRanges. Нужно будет обновлять в активной задаче с помощью последней timeStart и currentTime === new Date()
        timeBase: 0,   //Можно выставить сразу значение
        timeRanges: []  //Для инфографики о перерывах. Если диапазон 1 - информации о перерывах не будет
    }
}

const initialState = [
    initialTask
]

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: return [...state, action.payload]
        default: return state
    }
}

export default userReducer