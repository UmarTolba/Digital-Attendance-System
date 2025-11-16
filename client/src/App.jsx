import { Routes, Route } from 'react-router-dom';
import './App.css'
import './Login.css';
// IMPORT EL COMPONENT BETA3AK HNA EL AWL
import SessionSlots from './assets/components/SessionSlots';
import ProfessorComponent from './assets/components/ProfessorPage/ProfessorComponent';
import Sidebar from './assets/components/Sidebar';
import Welcome from './assets/components/welcome';

import Login from './assets/components/Login.jsx';

function App() {

  return (
    <>
      <Routes>

        {/* E3ML COPY-PASTE LEL LINE ELY T7T WE 7OT ESM EL COMPONENT BTA3K, WE 8AYAR EL PATH */}
        <Route path="/SessionSlots" element={<SessionSlots />} />
        <Route path="/Professor" element={<ProfessorComponent />} />
        <Route path="/SideBar" element={<Sidebar />} />
        <Route path="" element={<Welcome />} />

        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
