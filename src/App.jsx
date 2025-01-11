import { useState } from 'react'
import './App.css'
import Products from './Components/Products/Products.jsx'
import ZninthHeader from './Components/ZninthHeader/ZninthHeader.jsx'
import OCRScanning from './Components/OCRScanning/OCRScanning.jsx'
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login&Signup/Login.jsx'
import { useLocation } from 'react-router-dom'
import Signup from './Components/Login&Signup/Signup.jsx'


function App() {
  const [count, setCount] = useState(0);
  const location=useLocation();
  console.log(location,"location");
  const noHeaderRoutes = ["/login", "/signup","/"];

  return (
    <div className='zninth-app'>
      {/* <div className='z-ninth-header'><ZninthHeader/></div> */}
      {!noHeaderRoutes.includes(location.pathname) && (
        <div className='z-ninth-header'>
          <ZninthHeader />
        </div>
      )}
     <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ocr-scanning-tool" element={ <OCRScanning/> } />
      </Routes>

    </div>
  )
}

export default App
