import React from "react";

const sessions = [
  { day: "Monday", time: "10:00 - 11:30 AM", room: "Room 301, Engineering Building" },
  { day: "Wednesday", time: "10:00 - 11:30 AM", room: "Room 206, Computing Building" }
];

function SessionSlots() {  
  return (
    <div className="session-slots">
      <h2>Lecture Schedule</h2>
      {sessions.map((session, index) => (
        <div className="slot" key={index}>
          <div className="slot-icon">📅</div>
          <div className="slot-info">
            <div className="time">{session.day}, {session.time}</div>
            <div className="location">{session.room}</div>
          </div>
        </div>
      ))}
      <style jsx>{`
        .session-slots {
          font-family: Arial, sans-serif;
          max-width: 400px;
          margin: 20px auto;
        }

        .session-slots h2 {
          font-size: 1.2em;
          margin-bottom: 10px;
        }

        .slot {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }

        .slot-icon {
          width: 30px;
          height: 30px;
          background-color: #e0e7ff;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          font-size: 16px;
        }

        .slot-info {
          display: flex;
          flex-direction: column;
        }

        .slot-info .time {
          font-weight: bold;
          margin-bottom: 3px;
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
