import { Routes, Route } from 'react-router-dom';
import './App.css'
import './Login.css';
// IMPORT EL COMPONENT BETA3AK HNA EL AWL
import SessionSlots from './assets/components/SessionSlots';
import ProfessorComponent from './assets/components/ProfessorPage/ProfessorComponent';
import Sidebar from './assets/components/Sidebar';
import Welcome from './assets/components/welcome';

import Login from './assets/components/Login.jsx';
import StudentList from './assets/components/StudentList';

function App() {
  const students = [
        { id: 1, name: "Alice Johnson", attendanceStatus: "Present" },
        { id: 2, name: "Bob Smith", attendanceStatus: "Absent" },
        { id: 3, name: "Charlie Brown", attendanceStatus: "Present" }
    ];

  return (
    <>
      <Routes>

        {/* E3ML COPY-PASTE LEL LINE ELY T7T WE 7OT ESM EL COMPONENT BTA3K, WE 8AYAR EL PATH */}
        <Route path="/SessionSlots" element={<SessionSlots />} />
        <Route path="/Professor" element={<ProfessorComponent />} />
        <Route path="/SideBar" element={<Sidebar />} />
        <Route path="" element={<Welcome />} />

        <Route path="/Login" element={<Login/>} />
        <Route path="/StudentList" element={<StudentList students={students} />} />

      </Routes>
    </>
  );
}


export default App
