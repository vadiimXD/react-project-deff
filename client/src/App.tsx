
import Footer from './components/footer/Footer'
import MainContent from './components/mainContent/MainContent'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import Create from './components/create/Create'
import Search from './components/search/Search'
export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainContent />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
      <Footer />

    </>

  )
}


