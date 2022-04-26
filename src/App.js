import React, {useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import { useSimpledStore } from './functions/functions'
import Time from './components/Main/Time/Time'
import Home from './components/Main/Home/Home'
import Projects from './components/Main/Projects/Projects'
import './App.css'
import { asyncGetUser } from './redux/actions/userActions'
import { asyncGetProjects } from './redux/actions/projectActions'
import { asyncGetTasks } from './redux/actions/taskActions'
import { loadingData } from './redux/actions/appStateActions/appStateActions'
import axiosHandler from './axios/axiosHandler'
import { user } from './initialState'
import Layout from './components/hoc/Layout/Layout'

function App() {

  const userId = '-N0KopPM_ruX0sSk49Ni'
  
  const { dispatch } = useSimpledStore()

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
    <Layout >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/time' element={<Time />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Layout>
  );
}

export default App;
