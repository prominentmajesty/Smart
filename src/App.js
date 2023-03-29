//built-in
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import './default.css';
import WorkExperience from './pages/WorkExperience';
import Work from './pages/Work';
import MissionAndVission from './pages/MissionAndVission';
/* Allavsoft License Keys 
  731A-D111-3735-D32E-7677-C357-673E-59BD
  6B31-FE0F-8B24-D29F-492B-A049-0E09-3037
  D048-943C-829B-A952-AB23-BDA0-6D54-96DA
*/
//Git Hub PRIVATE ACCESS tOKEN = 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
// Use it to testa
// My Solar Specification Website URL : https://www.konga.com/product/1kva-12v-solar-system-inverter-5268705
// Article on paystack https://support.paystack.com/hc/en-us/articles/360009881600-Paystack-Test-Keys-Live-Keys-and-Webhooks
//hoc
// My Post Man Invitation URL https://app.getpostman.com/join-team?invite_code=cde01336a63a7add40671a942334283a
// https://stackoverflow.com/questions/70061199/print-a-react-functional-component

const App = props => {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/work" element={<Work/>}/>
            <Route exact path="/experience" element={<WorkExperience/>}/>
            <Route exact path="/mission-&-vission" element={<MissionAndVission/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
