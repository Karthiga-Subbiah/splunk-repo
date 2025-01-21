import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login&Signup/Login.jsx'
import { useLocation } from 'react-router-dom'
import Signup from './Components/Login&Signup/Signup.jsx'
import ForgotPassword from './Components/Password/ForgotPassword.jsx';
import ResetPassword from './Components/Password/ResetPassword.jsx';
import Header from "./Components/Header/Header.jsx";

function App() {
  const [count, setCount] = useState(0);
  const location=useLocation();
  console.log(location,"location");
  const noHeaderRoutes = ["/login"];

  return (
    <div className='app'>
      {/* {!noHeaderRoutes.includes(location.pathname) && (
        <div className='header'>
          <Header />
        </div>
      )} */}
     
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/password" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>

    </div>
  )
}

export default App
