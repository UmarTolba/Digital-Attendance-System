import { Routes, Route } from 'react-router-dom';
import './App.css'
import './Login.css';
// IMPORT EL COMPONENT BETA3AK HNA EL AWL
import SessionSlots from './assets/components/SessionSlots';
import ProfessorComponent from './assets/pages/ProfessorComponent';
import Sidebar from './assets/components/Sidebar';
import Welcome from './assets/components/welcome';
import DdataBarDaily from "./assets/components/DdataBarDaily.jsx";
import Login from './assets/pages/Login';
import Generation from './assets/components/QrCodeGen';
import StudentList from './assets/components/StudentList';
import AdminProtected from "./components/AdminProtected";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminSessions from "./pages/AdminSessions";
import AdminAttendance from "./pages/AdminAttendance";
import NotAuthorized from "./pages/NotAuthorized";

function App() {
  

  return (
    <>
      <Routes>
        {/* E3ML COPY-PASTE LEL LINE ELY T7T WE 7OT ESM EL COMPONENT BTA3K, WE 8AYAR EL PATH */}
        <Route path="/SessionSlots" element={<SessionSlots />} />
        <Route path="/Professor" element={<ProfessorComponent />} />
        <Route path="/SideBar" element={<Sidebar />} />
        <Route path="" element={<Welcome />} />
        <Route path="/QR" element={<Generation />} />
        
        <Route path="databar" element={<DdataBarDaily />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/StudentList" element={<StudentList />} />

        <Route path="/not-authorized" element={<NotAuthorized />} />

        {/* ADMIN ONLY ROUTES */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminProtected>
              <AdminDashboard />
            </AdminProtected>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminProtected>
              <AdminUsers />
            </AdminProtected>
          }
        />

        <Route
          path="/admin/sessions"
          element={
            <AdminProtected>
              <AdminSessions />
            </AdminProtected>
          }
        />

        <Route
          path="/admin/attendance"
          element={
            <AdminProtected>
              <AdminAttendance />
            </AdminProtected>
          }
/>


      </Routes>
      
    </>
  );
}


export default App
