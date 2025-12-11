import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoutes from './auth/ProtectedRoutes'
import Home from './pages/Home'
import { AuthProvider } from './auth/AuthContext'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
