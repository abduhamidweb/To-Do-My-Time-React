import { useState, useContext } from 'react'
import './App.css'
import RouterIndex from './routes/index'
import Header from './UI/Header'
import Footer from './UI/Footer'
import context from 'react-bootstrap/esm/AccordionContext'

function App() {
  const [check, setCheck] = useState(false)
  const [time, setTime] = useState([])
  const [inputWork, setInputWork] = useState('')
  const [inputTime, setInputTime] = useState('')
  return (
    <>
      <context.Provider
        value={{

          time,
          setTime,
          inputWork,
          setInputWork,
          inputTime,
          setInputTime,
          check,
          setCheck,
        }}
      >
        <Header />
        <RouterIndex />
        <Footer />
      </context.Provider>
    </>
  )
}

export default App
