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

  const updateForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/sessions", form);
    alert("Session Created");
  };

  return (
  <form className="session-form" onSubmit={submit}>
    <input name="name" placeholder="Name" onChange={updateForm} />

    <input name="day" type="number" placeholder="Day" onChange={updateForm} />

    <input name="month" type="number" placeholder="Month" onChange={updateForm} />

    <input name="period" type="number" placeholder="Period" onChange={updateForm} />

    <select name="semester" onChange={updateForm}>
      <option value="">Select semester</option>
      <option value="fall">Fall</option>
      <option value="spring">Spring</option>
    </select>

    <button type="submit">Create</button>
  </form>
);
}