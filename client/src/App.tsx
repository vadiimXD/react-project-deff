
import Footer from './components/footer/Footer'
import MainContent from './components/mainContent/MainContent'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import Create from './components/create/Create'
import Search from './components/search/Search'
import Details from './components/details/Details'
import { useState } from 'react'
import { AuthContext } from './contexts/AuthContext'
import { AuthType } from './types/AuthType'
export default function App() {
  const [authState, setAuthState] = useState<any>({})

  const contextData:AuthType  | undefined= {
    userId: authState.userId,
    token: authState.token,
    email: authState.email,
    setState: setAuthState
  }
  return (
    <AuthContext.Provider value={contextData}>

      <Header />
      <Routes>
        <Route path='/' element={<MainContent />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/details/:shoeId' element={<Details />}></Route>
      </Routes>
      <Footer />

    </AuthContext.Provider>
  )
}


