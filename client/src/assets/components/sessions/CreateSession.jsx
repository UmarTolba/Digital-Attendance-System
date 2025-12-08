import React, { useState } from "react";
import axios from "axios";

export default function CreateSession() {

  const [form, setForm] = useState({
    name: "",
    day: "",
    month: "",
    period: "",
    semester: "fall"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/session", {
        name: form.name,
        day: Number(form.day),
        month: Number(form.month),
        period: Number(form.period),
        semester: form.semester.toLowerCase(),
      });

      alert("Session Created Successfully!");
      console.log("Created:", res.data);

    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("❌ Error creating session");
    }
  };

  return (
    <>
    <style>{`
  .session-title {
    
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: 700;
    color: #2e00faff;
    letter-spacing: 1px;
  }

  .session-form {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 20px auto 40px auto;
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

  .uselect {
    background: #93a0aeff;
  }
`}</style>

    <h1 className="session-title">Create Session</h1>
    <form className="session-form" onSubmit={handleSubmit}>
      <input  name="name" placeholder="Name" onChange={handleChange} />

      <input name="day" placeholder="Day (number)" onChange={handleChange} />

      <input name="month" placeholder="Month (number)" onChange={handleChange} />

      <input name="period" placeholder="Period (number)" onChange={handleChange} />

      <select className="uselect" name="semester" onChange={handleChange}>
        <option value="fall">fall</option>
        <option value="spring">spring</option>
      </select>

      <button type="submit">Create Session</button>
    </form>
    </>
  );
}
