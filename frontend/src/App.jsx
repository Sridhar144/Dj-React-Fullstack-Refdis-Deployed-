import React from 'react'
import Signin from './pages/Signin';
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function Logout(){
  localStorage.clear()
  return <Navigate to="/login"/>
}
function RegisterAndLogout(){
  localStorage.clear()
  return <Register/>
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
        path='/'
        element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }
        />
        <Route
        path='/login'
        element={
          <Signin/>
        }
        />
        <Route
        path='/logout'
        element={
          <Logout/>
        }
        />
        <Route
        path='/register'
        element={
          <RegisterAndLogout/>
        }
        />
        <Route
        path='*'
        element={
          <NotFound/>
        }
        />
        {/* <Route
        path='/login'
        element={
          <Login/>
        }
        /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
