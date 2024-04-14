import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing BrowserRouter as Router
import './App.css';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className='App'>
      <Router> {/* Wrapping the components with Router */}
        <div>
          <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
      </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
