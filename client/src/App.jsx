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
import ClassLIist from './assets/pages/ClassList.jsx';
import AttendanceButton from './assets/components/SetAttendancePres.jsx'
import AbsentButton from './assets/components/AbsentButton.jsx'
import LateButton from './assets/components/LateButton.jsx'
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
        <Route path="/ClassList" element={<ClassLIist />} />
        <Route path="/SetAttendancePres" element={<AttendanceButton />} />
        <Route path="/AbsentButton" element={<AbsentButton />} />
        <Route path="/LateButton" element={<LateButton />} />

      </Routes>
    </>
  );
}


export default App
