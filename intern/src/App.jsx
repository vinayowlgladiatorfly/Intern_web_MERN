import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Navigate} from 'react-router-dom'
import './App.css'
import NavBar from './components/Homepage/NavBar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import JoBseeker from './components/Homepage/JoBseeker'
import Search from './components/Homepage/Search'
import Profile from './components/Abhishek/Profile'
import PostJobForm from './components/Suyash/PostJobForm'
import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup'
import RefreshHandler from './components/authentication/RefreshHandler'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Search />} />
            <Route path="/jobseeker" element={<JoBseeker />} />
            <Route path="/myprofile" element={<Profile />} />
            <Route path="/PostForm" element={<PostJobForm />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App