import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './App.css'
import { asyncGetUser } from './redux/actions/userActions'
import { asyncGetProject } from './redux/actions/projectActions'
import { asyncGetTask } from './redux/actions/taskActions'
import MainTable from './components/Main/MainTable/MainTable'
import axiosHandler from './axios/axiosHandler'

function App() {

  const userId = '-N0KopPM_ruX0sSk49Ni'
  
  const dispatch = useDispatch()

  async function addUser(item) {
    try {
      await axiosHandler.post('/users.json', item)
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async () => {
    const projectsId = await dispatch(asyncGetUser(userId))
    for (let projectId of projectsId) {
      const tasksId = await dispatch(asyncGetProject(projectId))  //Сделать у user поле с его задачами
      for (let taskId of tasksId) {
        await dispatch(asyncGetTask(taskId))
      }
    }
  }

  useEffect(() => {
    getData()
  }, [])

  // useEffect(() => {  //Добавить данные в БД
  //   addUser(user)
  // }, [Date.now()])

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
