
import { Routes, Route } from 'react-router-dom';
import './App.css'

// IMPORT EL COMPONENT BETA3AK HNA EL AWL
import AhlaComponent from './assets/components/AhlaComponent';
import SessionSlots from './assets/components/SessionSlots';
import Welcome from './assets/components/welcome';


function App() {

  return (
    <>
      <Routes>

        {/* E3ML COPY-PASTE LEL LINE ELY T7T WE 7OT ESM EL COMPONENT BTA3K, WE 8AYAR EL PATH */}
        <Route path="/Ahla" element={<AhlaComponent />} />
        <Route path="/SessionSlots" element={<SessionSlots />} />
        <Route path="/welcome" element={<Welcome />} />


      </Routes>
    </>
  )
}

export default App
