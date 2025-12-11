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
import AdminProtected from "./assets/components/AdminProtected";
import AdminDashboard from "./assets/pages/AdminDashboard";
import AdminUsers from "./assets/pages/AdminUsers";
import AdminSessions from "./assets/pages/AdminSessions";
import AdminAttendance from "./assets/pages/AdminAttendance";
import NotAuthorized from "./assets/pages/NotAuthorized";

import QrCodeRedirectionPage from './assets/pages/QrCodeRedirectionPage';
import CreateSession from "./assets/components/sessions/CreateSession";
import SessionViewer from './assets/pages/SessionViewer';
import ClassLIist from './assets/pages/ClassList.jsx';
import AttendanceButton from './assets/components/SetAttendancePres.jsx'
import AbsentButton from './assets/components/AbsentButton.jsx'
import LateButton from './assets/components/LateButton.jsx'
function App() {
  

  return (
    <>
      <Routes>
        {/* E3ML COPY-PASTE LEL LINE ELY T7T WE 7OT ESM EL COMPONENT BTA3K, WE 8AYAR EL PATH */}
        <Route path="/SessionSlots" element={<SessionViewer />} />
        <Route path="/Professor" element={<ProfessorComponent />} />
        <Route path="/SideBar" element={<Sidebar />} />
        <Route path="" element={<Welcome />} />
        <Route path="/QR" element={<Generation />} />
        <Route path="/roll" element={<QrCodeRedirectionPage/>} />
        <Route path="databar" element={<DdataBarDaily />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/StudentList" element={<StudentList />} />
        <Route path="/ClassList" element={<ClassLIist />} />
        <Route path="/SetAttendancePres" element={<AttendanceButton />} />
        <Route path="/AbsentButton" element={<AbsentButton />} />
        <Route path="/LateButton" element={<LateButton />} />

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
        
        <Route path="/sessions/CreateSession" element={<CreateSession />} />


      </Routes>
      
    </>
  );
}


export default App
