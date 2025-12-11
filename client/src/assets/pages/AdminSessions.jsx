import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import axios from "axios";
export default function AdminSessions() {
  const [sessions, setSessions] = useState([]);
  const [form, setForm] = useState({
    name: "",
    day: "",
    month: "",
    period: "",
    semester: "fall"
  });

  const [editMode, setEditMode] = useState(false);
  const [editingSession, setEditingSession] = useState(null);

  const fetchSessions = async () => {
    const res = await fetch("http://localhost:3000/api/session");
    const data = await res.json();
    setSessions(data);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", day: "", month: "", period: "", semester: "fall" });
    fetchSessions();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/session/delete`, {
      data: {
        id: id,
      },
    });
    fetchSessions();
  };

  const startEdit = (session) => {
    setEditingSession(session);
    setForm(session);
    setEditMode(true);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/session/${editingSession._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setEditMode(false);
    setEditingSession(null);
    fetchSessions();
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-6 w-full">

        <h2 className="text-3xl font-bold mb-4">Manage Sessions</h2>

        {/* ADD / EDIT FORM */}
        <form
          className="bg-white p-4 shadow rounded mb-6 grid grid-cols-3 gap-3"
          onSubmit={editMode ? handleSaveEdit : handleAdd}
        >
          <input
            placeholder="Name"
            className="border p-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="number"
            placeholder="Day"
            className="border p-2 rounded"
            value={form.day}
            onChange={(e) => setForm({ ...form, day: e.target.value })}
          />

          <input
            type="number"
            placeholder="Month"
            className="border p-2 rounded"
            value={form.month}
            onChange={(e) => setForm({ ...form, month: e.target.value })}
          />

          <input
            type="number"
            placeholder="Period"
            className="border p-2 rounded"
            value={form.period}
            onChange={(e) => setForm({ ...form, period: e.target.value })}
          />

          <select 
            className="border p-2 rounded bg-white"
            value={form.semester}
            onChange={(e) => setForm({ ...form, semester: e.target.value })}
          >
            <option value="fall">Fall</option>
            <option value="spring">Spring</option>
          </select>

          <button className="bg-blue-600 text-white col-span-3 p-2 rounded">
            {editMode ? "Save Changes" : "Add Session"}
          </button>
        </form>

        {/* LIST */}
        <div className="bg-white shadow p-4 rounded">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Name</th>
                <th className="p-2">Day</th>
                <th className="p-2">Month</th>
                <th className="p-2">Period</th>
                <th className="p-2">Semester</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s) => (
                <tr key={s._id} className="border-b">
                  <td className="p-2">{s.name}</td>
                  <td className="p-2">{s.day}</td>
                  <td className="p-2">{s.month}</td>
                  <td className="p-2">{s.period}</td>
                  <td className="p-2 capitalize">{s.semester}</td>

                  <td className="p-2">
                    <button
                      onClick={() => startEdit(s)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(s._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
