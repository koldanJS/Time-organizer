import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/hoc/Layout/Layout'
import Auth from './components/Auth/Auth'
import Time from './components/Main/Time/Time'
import Home from './components/Main/Home/Home'
import Projects from './components/Main/Projects/Projects'
import EditUser from './components/Main/EditUser/EditUser'

function App() {

  console.log('render app ')

  return (
    <Routes>
      <Route path='/' element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path='/time/timesheets' element={
        <Layout>
          <Time activeTab='timesheets' />
        </Layout>
      } />
      <Route path='/time/archive' element={
        <Layout>
          <Time activeTab='archive' />
        </Layout>
      } />
      <Route path='/projects' element={
        <Layout>
          <Projects />
        </Layout>
      } />
      <Route path='/edit-user' element={
        <Layout>
          <EditUser />
        </Layout>
      } />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  )
}

export default App;
