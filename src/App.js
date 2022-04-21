import React from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css'

function App() {

  const title = useSelector(state => state.some.title)

  return (
    <>
      <Header />  {/* Проверить все вложенные компоненты (передача состояния) */}
      <Main />
    </>
  );
}

export default App;
