import React from 'react'

const Loginpage = () => {
  return (
    <div className='alingit'>
        <div className='login'>
            <img className='digiflakes' src='https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png'></img>
            <h1>Welcome to DigitalFlake</h1>
            <label>Email:</label>
            <input type='text' placeholder='write email'></input><br></br>
            <label>Password:</label>
            <input type='pasword' placeholder='Password'></input><br></br>
            <button className='hey'>Login In</button>
        </div>
    </div>
  )
}

export default Loginpage;