import React, {useEffect, useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import { useSimpledStore, useUpdate } from './functions/functions'
import Time from './components/Main/Time/Time'
import Home from './components/Main/Home/Home'
import Projects from './components/Main/Projects/Projects'
import './App.css'
// import axiosHandler from './axios/axiosHandler'
// import { user } from './initialState'
import Layout from './components/hoc/Layout/Layout'
import { asyncGetUser } from './redux/actions/userActions'
import { setTimeUpdate } from './redux/actions/appStateActions/appStateActions'

function App() {

  const userId = '-N0KopPM_ruX0sSk49Ni'
  
  const [timeUpdate, setTimeUpdate] = useState(0)
  const { getData, getUpdateCurrent } = useUpdate()
  // const { timeUpdate, dispatch } = useSimpledStore()

  // async function addUser(item) {
  //   try {
  //     await axiosHandler.post('/users.json', item)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

//   const currentTime = new Date().getSeconds

//   setInterval(() => {
//     if (true) {
//       const currentTime = Date.now()
//       // getUpdateCurrent(asyncGetUser, userId)
//       setTimeUpdate()
//       // dispatch(setTimeUpdate(currentTime))
//     }
//   }, 10000);
// console.log('render app')
  useEffect(() => {
    // axiosHandler.put('/users/-N0KopPM_ruX0sSk49Ni.json', user)
    getData()
    
  }, [timeUpdate])

  // setInterval(() => {
  //   update()
  // }, 200000);

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
