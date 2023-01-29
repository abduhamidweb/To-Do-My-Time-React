import { useState } from 'react'
import './App.css'
import RouterIndex from "./routes/index"
import Header from './UI/Header'
import Footer from './UI/Footer'
function App() {
  return (
    <>
      <Header/>
      <RouterIndex />
      <Footer/>
    </>
  )
}

export default App
