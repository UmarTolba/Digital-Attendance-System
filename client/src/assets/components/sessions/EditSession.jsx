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
    axios.get(`http://localhost:5000/sessions/${id}`)
      .then(res => setForm(res.data));
  }, [id]);

  const updateForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/sessions/${id}`, form);
    alert("Session Updated");
  };

  return (
    <form onSubmit={submit}>
      <input name="name" value={form.name} onChange={updateForm} />

      <input name="day" type="number" value={form.day} onChange={updateForm} />

      <input name="month" type="number" value={form.month} onChange={updateForm} />

      <input name="period" type="number" value={form.period} onChange={updateForm} />

      <select name="semester" value={form.semester} onChange={updateForm}>
        <option value="fall">Fall</option>
        <option value="spring">Spring</option>
      </select>

      <button>Update</button>
    </form>
  );
}
