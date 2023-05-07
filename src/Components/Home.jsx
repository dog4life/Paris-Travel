import React from 'react'
import './Navbar.css'


function Home() {
  return (
   <>
    <div className="container-fluid img-home">
      <h1 className='text-home'>TOP HOTEL IN THE CITY</h1>
    </div>
    <div className="row d-flex justify-content-center">
        <div className="col-lg-7 box d-flex align-items-center flex-column justify-content-center">
            <div className="row justify-content-center p-3">
                <div className="col-lg-3">
                    <h5>Check In Date:</h5>
                    <input type="date" className='date'  />
                </div>
                <div className="col-lg-4">
                    <h5>Check Out Date:</h5>
                    <input type="date" className='date' />
                </div>
                <div className="col-lg-2">
                    <h5>Adults:</h5>
                    <select name="adults" id="adults" className='selection-box'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="col-lg-2">
                    <h5>Children:</h5>
                    <select name="adults" id="adults" className='selection-box'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="col-lg-1">
                   <h5> Rooms:</h5>
                   <select name="adults" id="adults" className='selection-box'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
              
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <button className='btn btn-warning '> Book Now</button>
                </div>
            </div>
        </div>
    </div>
    </>
   
  )
}

export default Home
