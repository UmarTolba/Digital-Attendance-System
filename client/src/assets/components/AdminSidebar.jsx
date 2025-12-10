import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function AdminSidebar() {
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/admin/users" className="hover:text-blue-300">
            Manage Users
          </Link>
        </li>

        <li>
          <Link to="/admin/sessions" className="hover:text-blue-300">
            Manage Sessions
          </Link>
        </li>

        <li>
          <Link to="/admin/attendance" className="hover:text-blue-300">
            Manage Attendance
          </Link>
      <button
        onClick={logout}
        className="bg-red-500 mt-auto p-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
      </li>
      </ul>
    </div>
  );
}
