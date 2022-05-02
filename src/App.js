import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from './components/hoc/Layout/Layout'
import Auth from './components/Auth/Auth'
import Time from './components/Main/Time/Time'
import Home from './components/Main/Home/Home'
import Projects from './components/Main/Projects/Projects'
import NewProject from './components/Main/Projects/NewProject/NewProject'

function App() {

  console.log('render app ')

  return (
    <Routes>
      <Route path='/' element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path='/time' element={
        <Layout>
          <Time />
        </Layout>
      } />
      <Route path='/projects' element={
        <Layout>
          <Projects />
        </Layout>
      } />
      <Route path='/projects/new' element={
        <Layout>
          <NewProject />
        </Layout>
      } />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  )
}

export default App;
