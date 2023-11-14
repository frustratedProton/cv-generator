import { useState } from 'react'
import '../styles/Info.css'
export default function Info() {
  
  return (
      <form className="form">
        <h2 className='aboutYou'>About You</h2>


        <div className="infoContainer">
          <label>First Name { ' ' }</label>
          <input
              id='firstName'
              type='text'
              value={''}
              name=''
              // onChange={handleInfoChange}
              placeholder='First Name'
              >
            </input>
        </div>

        <div className="infoContainer">
          <label>Last Name { ' ' }</label>
          <input
              id='lastName'
              type='text'
              value={''}
              name=''
              // onChange={handleInfoChange}
              placeholder='Last Name'
              >
            </input>
        </div>  

        <div className="infoContainer">
          <label>Phone { ' ' }</label>
          <input
              id='phoneNumer'
              type='number'
              value={''}
              name=''
              // onChange={handleInfoChange}
              placeholder='Phone Number'
              >
            </input>
        </div>

        <div className="infoContainer">
          <label>Email { ' ' }</label>
          <input
              id='email'
              type='email'
              value={''}
              name=''
              // onChange={handleInfoChange}
              placeholder='Email Address'
              >
            </input>
        </div>

        <div className="infoContainer">
          <label>Linkdin { ' ' }</label>
          <input
              id='linkdin'
              type='text'
              value={''}
              name=''
              // onChange={handleInfoChange}
              placeholder='linkdin'
              >
            </input>
        </div>
        
        <div className="infoContainer">
          <label>Github { ' ' }</label>
          <input
              id='github'
              type='text'
              value={''}
              name=''
              // onChange={handleInfoChange}
              placeholder='GitHub Account'
              >
            </input>
        </div>

      </form>
  )
}