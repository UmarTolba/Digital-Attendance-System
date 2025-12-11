import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import axios from "axios";
export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", password: "", isProf:false});

  // FOR EDIT
  const [editMode, setEditMode] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // FETCH
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/api/user");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // CREATE USER
  const handleAddUser = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/user", {
      name:form.name,
      email:form.email,
      password:form.password,
      isprof:false
  });

    //setForm({ name: "", email: "", password: "" });
    fetchUsers();
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    await fetch(`http://localhost:3000/api/user/${id}`, { method: "DELETE" });

    fetchUsers();
  };

  // ENTER EDIT MODE
  const startEdit = (user) => {
    setEditingUser(user);
    setEditMode(true);
    setForm({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  };

  // SAVE EDIT
  const handleSaveEdit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/api/user/${editingUser._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setEditMode(false);
    setEditingUser(null);
    fetchUsers();
  };

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="p-6 w-full">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Manage Users</h2>

        {/* ADD USER */}
        {!editMode && (
          <div className="bg-white shadow p-4 rounded mb-6">
            <h3 className="text-xl font-semibold mb-3">Add New User</h3>
            <form className="flex gap-4" onSubmit={handleAddUser}>
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded w-full"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded w-full"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded w-1/4"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />

              <button className="bg-blue-600 text-white px-4 rounded">
                Add
              </button>
            </form>
          </div>
        )}

        {/* EDIT USER FORM */}
        {editMode && (
          <div className="bg-yellow-100 border-yellow-400 border p-4 rounded mb-6">
            <h3 className="text-xl font-semibold mb-3 text-yellow-900">
              Editing User
            </h3>
            <form className="flex gap-4" onSubmit={handleSaveEdit}>
              <input
                type="text"
                className="border p-2 rounded w-1/4"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                className="border p-2 rounded w-full"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                type="password"
                className="border p-2 rounded w-full"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />

              <button className="bg-green-600 text-white px-4 rounded">
                Save
              </button>
              <button
                className="bg-gray-400 text-white px-4 rounded"
                onClick={() => {
                  setEditMode(false);
                  setEditingUser(null);
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        )}

        {/* USERS TABLE */}
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-xl font-semibold mb-3">All Users</h3>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u._id} className="border-b">
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => startEdit(u)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(u._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
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