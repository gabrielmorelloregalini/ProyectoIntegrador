import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Layout from "./Routes/Layout"
import Navbar from "./Components/Navbar"

function App() {
  

  return (
    
      <>
        <Router>

          <Layout>
            <Navbar/>
            <Routes>
              
            </Routes>
          </Layout>


        </Router>
      </>


  )
}

export default App
