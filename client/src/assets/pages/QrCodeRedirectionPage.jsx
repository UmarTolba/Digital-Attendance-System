import React, { useState } from 'react'
import '../../redirectPage.css'
//import img1 from './images/img1.png'
import axios from 'axios'
function QrCodeRedirectionPage() {
  const [done, setDone] = useState(false)
  const [email, setEmail] = useState("shawkat@gmail.com");
  const [OTP, setOTP] = useState(0);
  const sessionID = new URLSearchParams(window.location.search).get("sessionID");
  let [message, setMessage] = useState("Attend Session");
  const [password, setPassword] = useState("test");
  const IPAdress = window.location.hostname;

  const handleSubmit = async check => {
    check.preventDefault()
    if (check.target.checkValidity()) {
      // setDone(true)
      try {
        let response = await axios.post('http://'+IPAdress+':3000/api/user/login', {
          email,
          password,
        });

        const userData = response.data
  
        setMessage("Correct credentials, incorrect OTP");
        if(response.data)
        {
          response = await axios.post('http://'+IPAdress+':3000/api/sessionPassword/session', {
            sessionID:sessionID,
            password:parseInt(OTP),
          });


          response = await axios.post('http://'+IPAdress+':3000/api/attendance', {
            user:userData._id,
            session:sessionID,
            status: "present"
          });
          setMessage("Correct");
          setDone(!done);

        }
        
      } catch (err) {
        const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
        console.log(err);
        setMessage(errorMessage);
      }
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
        src="https://static01.nyt.com/images/2020/01/28/multimedia/28xp-memekid3/28cp-memekid3-superJumbo.jpg"
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
      {message}
      <label>
        Email <input type="email" value={email} name="Email" onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password <input type="password" value={password}  name="Password" onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <label>
        OTP<input type="number" name="OTP" onChange={(e) => setOTP(e.target.value)} required />
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

export default QrCodeRedirectionPage