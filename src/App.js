import React, {useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import { useUpdate } from './functions/functions'
import Time from './components/Main/Time/Time'
import Home from './components/Main/Home/Home'
import Projects from './components/Main/Projects/Projects'
import './App.css'
// import axiosHandler from './axios/axiosHandler'
// import { user } from './initialState'
import Layout from './components/hoc/Layout/Layout'

function App() {

  const userId = '-N0KopPM_ruX0sSk49Ni'

  const { getData } = useUpdate()

  useEffect(() => {
    // axiosHandler.put('/users/-N0KopPM_ruX0sSk49Ni.json', user)
    getData()
    
  }, [userId])

  console.log('render app ')

  // async function addUser(item) {
  //   try {
  //     await axiosHandler.post('/users.json', item)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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
