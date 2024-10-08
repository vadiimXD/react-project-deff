
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
import { AuthContextProvider } from './contexts/AuthContext'
import Edit from './components/edit/Edit'
import Profile from './components/profile/Profile'
import AuthGuard from './guards/authGuard'
import LoggedGuard from './guards/loggedGuard'
import OwnerGuard from './guards/ownerGuard'

export default function App() {

  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={<MainContent />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/details/:shoeId' element={<Details />}></Route>

        <Route element={<LoggedGuard />}>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Route>

        <Route path='/edit/:shoeId/:ownerId' element={<OwnerGuard> <Edit /> </OwnerGuard>}></Route>

        <Route element={<AuthGuard />}>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>

        <Route path='*' element={<MainContent />}></Route>
      </Routes>
      <Footer />
    </AuthContextProvider>
  )
}


