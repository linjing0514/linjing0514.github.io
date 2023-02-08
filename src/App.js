import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Projects';
import React from 'react';
import Experience from './pages/Experiences';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Project />}/>
          <Route path='/projects/:id' element={<ProjectDisplay />}/>
          <Route path="/experiences" element={<Experience />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
