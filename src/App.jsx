import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent/Home.jsx';
import AboutUsComponent from './components/AboutusComponent/Aboutus.jsx';
import DepartmentComponent from './components/DeptComponent/Dept.jsx';
import EventComponent from './components/EventComponent/Event.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/" style={{textDecoration:"none",color:"white",fontSize:"16px"}}>Home</Link></li>
          <li><Link to="/about" style={{textDecoration:"none",color:"white",fontSize:"16px"}}>About</Link></li>
          <li><Link to="/department" style={{textDecoration:"none",color:"white",fontSize:"16px"}}>Department</Link></li>
          <li><Link to="/events" style={{textDecoration:"none",color:"white",fontSize:"16px"}}>Events</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomeComponent/>}></Route>
        <Route exact path="/about" element={<AboutUsComponent/>}></Route>
        <Route exact path="/department" element={<DepartmentComponent/>}></Route>
        <Route exact path="/events" element={<EventComponent/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
