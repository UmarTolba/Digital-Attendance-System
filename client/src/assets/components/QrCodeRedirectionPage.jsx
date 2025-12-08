import React, { useState } from 'react'
import './redirectPage.css'
import img1 from './images/img1.png'

function App() {
  const [done, setDone] = useState(false)

  const handleSubmit = check => {
    check.preventDefault()
    if (check.target.checkValidity()) {
      setDone(true)
    }
  }

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }


  const completionMessage = (
    <div style={{ textAlign: 'center' }}>
      <img
        src={img1}
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'contain',
          display: 'block',
          margin: '0 auto',
        }}/>
      <p style={{ marginTop: '20px', fontSize: '20px', fontWeight: '600' }}>
        Your attendance has been taken.
      </p>
    </div>
  )


  const loginForm = (
    <form onSubmit={handleSubmit}>
      <label>
        Email <input type="email" name="Email" required />
      </label>
      <label>
        Password <input type="password" name="Password" required />
      </label>
      <label>
        OTP<input type="text" name="OTP" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  )

  return (
    <div style={containerStyle}>
      {done ? completionMessage : loginForm}
    </div>
  )
}

export default App