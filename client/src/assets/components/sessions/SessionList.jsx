import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SessionList() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/sessions")
      .then(res => setSessions(res.data));
  }, []);

  const deleteSession = async id => {
    await axios.delete(`http://localhost:5000/sessions/${id}`);
    setSessions(sessions.filter(s => s._id !== id));
  };

  return (
    <div>
      <h2>Sessions</h2>

      <Link to="/sessions/CreateSession">Add Session</Link>

      <ul>
        {sessions.map(s => (
          <li key={s._id}>
            {s.day}/{s.month} — Period {s.period} — {s.semester}

            <Link to={`/sessions/EditSession/${s._id}`}>Edit</Link>
            <button onClick={() => deleteSession(s._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
