import React from 'react';
import LeaveConfigaration from './LeaveConfigaration';
import Navbar from './Navbar';
import LeaveForm from './LeaveForm';
import LeaveConfig from './LeaveConfiration1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leave1 from './assets/Leave1'
function App() { 
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/"  /> {/* Default Route */}
          <Route path="/leaveconfig" element={<LeaveConfigaration />} />
          <Route path="/leaveform" element={<LeaveForm />} />
          <Route path="/leaveconfig1" element={<LeaveConfig />} />
          <Route path = "/apply-leave" element = {<LeaveForm/>}/>
          <Route  path = "/leave-types" element = {<Leave1/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
