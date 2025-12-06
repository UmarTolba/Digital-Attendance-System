import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditSession() {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    day: "",
    month: "",
    period: "",
    semester: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/sessions/${id}`)
      .then((res) => setForm(res.data));
  }, [id]);

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/sessions/${id}`, form);
    alert("Session Updated");
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
          background: #28a745;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .session-form button:hover {
          background: #1e7e34;
        }
          .uselect{
            background: #93a0aeff;
          }
      `}</style>

      <form className="session-form" onSubmit={submit}>
        <input name="name" value={form.name} onChange={updateForm} />

        <input name="day" type="number" value={form.day} onChange={updateForm} />

        <input name="month" type="number" value={form.month} onChange={updateForm} />

        <input name="period" type="number" value={form.period} onChange={updateForm} />

        <select className="uselect" name="semester" value={form.semester} onChange={updateForm}>
          <option value="fall">Fall</option>
          <option value="spring">Spring</option>
        </select>

        <button type="submit">Update</button>
      </form>
    </>
  );
}
