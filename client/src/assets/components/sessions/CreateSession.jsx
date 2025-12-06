import React, { useState } from "react";
import axios from "axios";

export default function CreateSession() {
  const [form, setForm] = useState({
    name: "",
    day: "",
    month: "",
    period: "",
    semester: ""
  });

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/sessions", form);
    alert("Session Created");
  };

  return (
    <>
      <style>{`
        .session-form {
          display: flex;
          flex-direction: column;
          width: 350px;
          margin: 40px auto;
          padding: 20px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          gap: 15px;
        }

        .session-form input,
        .session-form select {
          padding: 12px 14px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 15px;
          outline: none;
          transition: 0.2s ease;
        }

        .session-form input:focus,
        .session-form select:focus {
          border-color: #007bff;
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
        }

        .session-form button {
          padding: 12px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .session-form button:hover {
          background: #0056b3;
        }
          .uselect{
            background: #93a0aeff;
          }
      `}</style>

      <form className="session-form" onSubmit={submit}>
        <input name="name" placeholder="Name" onChange={updateForm} />

        <input name="day" type="number" placeholder="Day" onChange={updateForm} />

        <input name="month" type="number" placeholder="Month" onChange={updateForm} />

        <input name="period" type="number" placeholder="Period" onChange={updateForm} />

        <select className="uselect" name="semester" onChange={updateForm}>
          <option value="">Select semester</option>
          <option value="fall">Fall</option>
          <option value="spring">Spring</option>
        </select>

        <button type="submit">Create</button>
      </form>
    </>
  );
}
