import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './App.css'
import { addUser } from './redux/actions/userActions'
import MainTable from './components/Main/MainTable/MainTable'

function App() {
  console.log('render app')
  // const title = useSelector(state => state.some.title)
  const user = {
    id: 'nghdfg',
    firstName: 'Nazar',
    lastName: 'Ponev',
    email: 'nponev@mail.ru',
    password: '12345678',
    dateOfBirth: new Date('1987-12-05'),
    phoneNumber: '+375294575123',
    company: null,
    photo: null
  }
  const dispatch = useDispatch()
  dispatch(addUser(user))

  return (
    <>
      <Header />  {/* Проверить все вложенные компоненты (передача состояния) */}
      <Main />
    </>
  );
}

export default App;
