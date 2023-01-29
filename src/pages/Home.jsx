import React, { useContext, useState } from 'react'
import context from 'react-bootstrap/esm/AccordionContext'

const Home = () => {
  const { inputWork, setInputWork, inputTime, setInputTime, check, setCheck } =
    useContext(context)
  const [sd, setSd] = useState(false)
  const [ass, setAss] = useState('finshied')
  const [clas, setclas] = useState(' btn btn-danger w-100 mt-2')
  let tasks = []
  function handlerAdd() {
    const task = {
      work: inputWork,
      time: inputTime,
    }
    tasks.push(task)

    localStorage.setItem('work', JSON.stringify(tasks));
  }
  return (
    <>
      <main>
        <div className='container mt-5'>
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
                onClick={() => {
                  handlerAdd()
                  setSd(true)
                }}
              >
                add
              </button>
            </div>
          </div>
          {sd ? (
            <button
              className={clas}
              onClick={() => {
                setCheck(true)
                setAss('oke')
                setclas(' btn btn-success w-100 mt-2')
              }}
            >
              {ass}
            </button>
          ) : (
            ''
          )}
          {check ? (
            <div className='row mt-5 border p-3'>
              <div className='col-4'>
                <h2>your work</h2>
              </div>
              <div className='col-4'>
                <h2>your time</h2>
              </div>
              <div className='col-4'>
                <h2>time limet</h2>
              </div>
              {JSON.parse(localStorage.getItem('work')).map((item) => {
                return (
                  <>
                    <div className='col-4'>
                      <ul>
                        <li>{item.work ? item.work : 'any'}</li>
                      </ul>
                    </div>
                    <div className='col-4'>
                      <ul>
                        <li>{item.time ? item.time : 'any'}</li>
                      </ul>
                    </div>
                    <div className='col-4'>
                      <button>start</button>
                      <button>pause</button>
                    </div>
                  </>
                )
              })}
            </div>
          ) : (
            ''
          )}
        </div>
      </main>
    </>
  )
}

export default Home
