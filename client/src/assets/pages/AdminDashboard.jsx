import AdminSidebar from "../components/AdminSidebar";
export default function AdminDashboard() {
  return (
    <div className="flex"> 
      {/* LEFT SIDE — Sidebar */}
      <AdminSidebar />
      {/* RIGHT SIDE — Content */}
      <div className="p-6 w-full">
        <h1 className="text-3xl font-bold text-blue-600">Admin Dashboard</h1>
        <p className="text-gray-700 mt-2">
        Welcome, Admin! Choose an option from the sidebar.
      </p>
      </div>
    </div>
  );
}
