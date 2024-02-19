import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "./pages/login/signup.module.css";
import Signup from "./pages/login/signup";
import Genrepage from './pages/genrepage/genrepage';
import Actordetail from './pages/actordetail/actordetail';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>    
          <Routes>
              <Route path="/" element = {<Signup/>}></Route>
              <Route path="/Signup" element = {<Signup/>}></Route>
              <Route path="/genrepage" element = {<Genrepage/>}></Route>
              <Route path="/actordetail" element = {<Actordetail/>}></Route>
              
          </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;


