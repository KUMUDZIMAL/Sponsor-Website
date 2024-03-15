import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header'
import Feedback from './pages/Feedback'

function App() {

  return (
    <>
    <Header/>
     <About/>
     <Feedback/>
    </>
  )
}

export default App
