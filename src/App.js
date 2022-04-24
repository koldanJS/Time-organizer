import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './App.css'
import { asyncGetUser } from './redux/actions/userActions'
import { asyncGetProjects } from './redux/actions/projectActions'
import { asyncGetTasks } from './redux/actions/taskActions'
import { loadingData } from './redux/actions/appStateActions/appStateActions'
import axiosHandler from './axios/axiosHandler'
import { user } from './initialState'

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
    dispatch(loadingData(true))
    const { projectsId, tasksId } = await dispatch(asyncGetUser(userId))
    await dispatch(asyncGetProjects(projectsId))
    await dispatch(asyncGetTasks(tasksId))
    dispatch(loadingData(false))
  }

  useEffect(() => {
    // axiosHandler.put('/users/-N0KopPM_ruX0sSk49Ni.json', user)
    getData()
  }, [userId])

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
