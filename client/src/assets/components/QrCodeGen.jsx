import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router";
import axios from "axios";

function Generation() {
  const [visible, setVisible] = useState(false);

  const localIP = import.meta.env.VITE_LOCAL_IP || "localhost";
  
  const sessionID = new URLSearchParams(window.location.search).get("sessionID");
  const QR_CONTENT = `http://${localIP}:8080/roll?sessionID=${sessionID}`;
  const [password, setPassword] = useState("00000");
  
  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await axios.post("http://localhost:3000/api/sessionPassword/",{
        sessionID:sessionID
      });

      setPassword(response.data.password);
    }

    fetchData();
  },[]);

  return (
    <div className="flex-col" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <button onClick={() => setVisible(true)}>Show QR Code</button>
      <button onClick={() => setVisible(false)}>Hide QR Code</button>

      <div style={{ textAlign: "center" }}>
        {visible ? (
          <>
            <div style={{ background: 'white', padding: '10px' }}>
              <QRCodeSVG value={QR_CONTENT} size={200} />
            </div>
            <p style={{ marginTop: '10px' }}>{QR_CONTENT}</p>
          </>
        ) : (
          <p>{QR_CONTENT}</p>
        )}
      </div>

          <h1 className="text-blue-800 text-3xl font-bold">{password}</h1>
      <Link 
        to="/Professor" 
        className="m-auto mt-8 rounded-lg border-2 border-b-blue-300 border-solid hover:text-blue-800 w-[20%] flex justify-center transition-all duration-100 hover:bg-white font-semibold text-xl text-white items-center p-2 bg-blue-800"
      >
        <i className="fa-solid fa-arrow-left mr-3"></i> Return to Dashboard
      </Link>
    </div>
  );
}

export default Generation;