import React, { use } from "react";
import { useState, useEffect } from "react";

// const sessions = [
//   { day: "Monday", time: "10:00 - 11:30 AM", room: "Room 301, Engineering Building" },
//   { day: "Wednesday", time: "10:00 - 11:30 AM", room: "Room 206, Computing Building" }
// ];



function SessionSlots({setSessionID, setSessionName}) {  // <-- Capitalized
  
  const [sessions, setSessions] = useState([]);

  useEffect(()=>{
    const fetchSessions = async () =>{
      try {
        const response = await fetch("http://localhost:3000/api/session");
        const sessions = await response.json();
        setSessions(sessions);
      } catch (error) {
        console.log("Error fetching sessions");
      }
    };
  
    fetchSessions();
  }, []);


  return (
    <div className="session-slots overflow-y-scroll no-scrollbar">
      <h2 className="text-blue-800 font-bold text-xl mb-2 opacity-80 ">Lecture Schedule</h2>
      {sessions.map((session, index) => (
        <div onClick={()=>{setSessionID(session._id); setSessionName(session.name)}} className="slot" key={index}>
          <div className="slot-icon"><i class="fa-solid fa-calendar"></i></div>
          <div className="slot-info">
          
            <div className="name">{session.name}</div>
            <div className="location">Date:{session.day}-{session.month}-2025 {session.semester}</div>
          </div>
        </div>
      ))}
      <style jsx>{`
        .session-slots {
          font-family: "Elms Sans", sans-serif;
          font-optical-sizing: auto;
          font-style: normal;
          width: 30%;
          height:100%;
          margin:auto;
          margin-left:0;
          padding: 15px;
          border: 1px solid #5e97ff;
          border-radius: 20px;
        }

        .slot {
          display: flex;
          height:fit-content;
          justify-content: center;
          align-items: center;
          margin-bottom: 15px;
          padding: 10px;
          border: 1px solid #5e97ff;
          border-radius: 8px;
          background: linear-gradient(90deg, #edf4ff, white);
        }

        .slot-icon {
          width: 40px;
          height: 40px;
          aspect-ratio: 1/1;
          background-color: #003596;
          border-radius: 6px;
          color:white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          padding: 10px;
          font-size: 1.6rem;
        }

        .slot-info {
          display: flex;
          margin:auto;
          margin-left:0;
          flex-direction: column;
        }

        .slot-info .name {
          font-size: 1.3rem;
          font-weight: bold;
          color:darkblue;
        }

        .slot-info .location {
          color: #555;
          font-size: 0.9em;
        }
      `}</style>
    </div>
  );
}

export default SessionSlots;
