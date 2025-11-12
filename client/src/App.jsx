
import { Routes, Route } from 'react-router-dom';
import './App.css'
import './Login.css';
// IMPORT EL COMPONENT BETA3AK HNA EL AWL
import Login from './Login.jsx';
import AhlaComponent from './assets/components/AhlaComponent';

function App() {

  return (
    <>
      <Routes>

        {/* E3ML COPY-PASTE LEL LINE ELY T7T WE 7OT ESM EL COMPONENT BTA3K, WE 8AYAR EL PATH */}
        <Route path="/Ahla" element={<AhlaComponent />} />

        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
