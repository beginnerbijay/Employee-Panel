import 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Adduser from './components/Adduser'
import Edit from './components/Edit'
import User from './components/User'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/adduser' element={<Adduser/>}/>
      <Route exact path='/edit/:id' element={<Edit/>}/>
      <Route exact path='/user/:id' element={<User/>}/>
    </Routes>
    </>
  )
}

export default App
