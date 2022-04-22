import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './App.css'
import { addUser, asyncgetUser } from './redux/actions/userActions'
import MainTable from './components/Main/MainTable/MainTable'
import axiosHandler from './axios/axiosHandler'
// import {task1, task2, task3, task4, task5, project1, project2, user} from './initialState'

function App() {

  // const title = useSelector(state => state.some.title)
  const userId = '-N0G0EiMhQ5OBTG7jGTW'
  
  const dispatch = useDispatch()
  // dispatch(addUser(user))

  
  async function addUser(item) {
    try {
      await axiosHandler.post('/users.json', item)
    } catch (error) {
      console.log(error)
    }
  }
console.log('render')
  useEffect(() => {
    console.log('getUser')
    dispatch(asyncgetUser(userId))
  }, [])

  // useEffect(() => {  //Добавить данные в БД
  //   addUser({title: true})
  // }, [Date.now()])

  return (
    <>
      <Header />  {/* Проверить все вложенные компоненты (передача состояния) */}
      <Main />
    </>
  );
}

export default App;
