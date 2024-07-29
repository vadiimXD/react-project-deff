import './App.css'
import Footer from './components/footer/Footer'
import MainContent from './components/mainContent/MainContent'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router-dom'
import Register from './components/register/Register'
export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainContent />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />

    </>

  )
}


