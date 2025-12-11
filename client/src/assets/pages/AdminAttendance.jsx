import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminAttendance() {
  const [attendance, setAttendance] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [users, setUsers] = useState([]);

  const [filterSession, setFilterSession] = useState("");
  const [filterUser, setFilterUser] = useState("");

  const fetchAll = async () => {
    const att = await (await fetch("http://localhost:3000/api/attendance")).json();
    const ses = await (await fetch("http://localhost:3000/api/session")).json();
    const usr = await (await fetch("http://localhost:3000/api/user")).json();

    setAttendance(att);
    console.log(ses);
    setSessions(ses);
    setUsers(usr);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleStatusChange = async (record, newStatus) => {
    await fetch(`http://localhost:3000/api/attendance/${record._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchAll();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete attendance record?")) return;
    await fetch(`http://localhost:3000/api/attendance/${id}`, { method: "DELETE" });
    fetchAll();
  };

  const filtered = attendance.filter(a =>
    (filterSession ? a.sessionId === filterSession : true) &&
    (filterUser ? a.userId === filterUser : true)
  );

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="p-6 w-full">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Manage Attendance</h2>

        {/* FILTERS */}
        <div className="bg-white shadow p-4 rounded mb-6 flex gap-4 text-white">
          <select
            className="border p-2 rounded text-white"
            value={filterSession}
            onChange={(e) => setFilterSession(e.target.value)}
          >
            <option value="">All Sessions</option>
            {sessions.map((s) => (
              <option key={s._id} value={s._id}>
                {s.name}
              </option>
            ))}
          </select>

          <select
            className="border p-2 rounded text-white"
            value={filterUser}
            onChange={(e) => setFilterUser(e.target.value)}
          >
            <option value="">All Users</option>
            {users.map((u) => (
              <option key={u._id} value={u._id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>

        {/* ATTENDANCE TABLE */}
        <div className="bg-white shadow p-4 rounded">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">User</th>
                <th className="p-2 text-left">Session</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((a) => (
                <tr key={a._id} className="border-b">
                  <td className="p-3">{users.find((u) => u._id === a.user._id)?.name}</td>
                  <td className="p-3">{sessions.find((s) => s._id === a.session._id)?.name}</td>
                  <td className="p-3">{a.date}</td>

                  <td className="p-3">
                    <select
                      className="border p-1 rounded text-white"
                      
                      value={a.status}
                      onChange={(e) => handleStatusChange(a, e.target.value)}
                    >
                      <option className="text-green-500" value="present">Present</option>
                      <option className="text-green-500" value="absent">Absent</option>
                      <option className="text-green-500" value="late">Late</option>
                    </select>
                  </td>

                  <td className="p-3 text-center">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(a._id)}
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
