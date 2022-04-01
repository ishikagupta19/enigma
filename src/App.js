import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Signup from './components/Signup'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

export const App = () => {
  return (
    <>
      <Navbar />
    
    <Routes>
   
      <Route exact path="/" element = {<Home />}/>

      <Route path="/login"  element = {<Login />} />

      <Route path="/leaderboard"  element = {<Leaderboard />} />

      <Route path="/signup" element = {<Signup/>} />

      
    </Routes>
    <Footer/>
    </>
  )
};

export default App; 
