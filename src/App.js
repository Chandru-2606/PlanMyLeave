import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Login from './Login/login';
import Slidebar from './Slidebar/slidebar';
import Form from './Form/form';
import Admin from './adminDashboard/admin';
import AdminApproval from './Props/adminApproval';
// import ConformLeave from './Props/conformleave';
// import AddEmployee from './Props/addEmployee';


function App() {
  return (

    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path={`/Slidebar/:id`} element={<Slidebar />} />
      <Route path="/Form" element={<Form />} />
      <Route path={"/Admin"} element={<Admin />} />
      <Route path={"/AdminApproval"} element={<AdminApproval />} />

      {/* <Route path={"/ConformLeave"} element={<ConformLeave />}/>
      <Route path={"/AddEmployee"} element={<AddEmployee />} /> */}


    </Routes>
    
  </Router>
  );
}


export default App;
