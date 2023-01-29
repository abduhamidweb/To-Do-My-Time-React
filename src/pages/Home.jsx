import React, { useContext, useState } from 'react'
import context from 'react-bootstrap/esm/AccordionContext'

const Home = () => {
    const { inputWork, setInputWork, inputTime, setInputTime, check, setCheck } =
        useContext(context);
    const [ sd, setSd] = useState([])
    let tasks = [];
    let workarr = [];
  function handlerAdd() {
    const task = {
      work: inputWork,
      time: inputTime,
    }
    tasks.push(task)
    localStorage.setItem('work', JSON.stringify(tasks))
  }
    function getWork() {
        JSON.parse(localStorage.getItem('work')).map((t) => setSd([t,...sd]))
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <input
              type='text'
              placeholder='what do you do'
              id=''
              name=''
              value={inputWork}
              onChange={(e) => {
                setInputWork(e.target.value)
              }}
              className='form-control text-center'
            />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <input
              type='text'
              placeholder='how much time do you have?'
              id=''
              name=''
              value={inputTime}
              onChange={(e) => {
                setInputTime(e.target.value)
              }}
              className='form-control text-center'
            />
          </div>
          <div className='col-12 mt-2 '>
            <button
              className='btn btn-info w-100 text-light'
              onClick={handlerAdd}
            >
              add
            </button>
          </div>
        </div>
        {check ? (
          ''
        ) : (
          <button
            className='btn btn-primary w-100 mt-5'
            onClick={() => {
                setCheck(true);
                getWork()
            }}
          >
            start my works
          </button>
        )}
        {check ? (
          <div className='row mt-5 border p-3'>
            <div className='col-4'>
              <h2>your work</h2>
              <ul>
                <li>Work 1</li>
              </ul>
            </div>
            <div className='col-4'>
              <h2>your time</h2>
              <ul>
                <li>time 1</li>
              </ul>
            </div>
            <div className='col-4'>
              <h2>time limet</h2>
              <button>start</button>
              <button>pause</button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default Home
