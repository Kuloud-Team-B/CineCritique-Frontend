import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/login/signin';
import Signup from "./pages/login/signup";
import Mainpage from './pages/mainpage/mainpage';
import Moviedetail from './pages/mainpage/moviedetail';
import Myinfo from './pages/mypage/myinfo';
import Mylikes from './pages/mypage/mylikes';
import Myposts from './pages/mypage/myposts';
import Posting from './pages/review/posting';
import Reviewboard from './pages/review/reviewboard';
import Genrepage from './pages/genrepage/genrepage';
import Actordetail from './pages/actordetail/actordetail';
import Notice from './pages/cs/notice';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>    
          <Routes>
              <Route path="/" element = {<Signup/>}></Route>
              <Route path="/Signin" element = {<Signin/>}></Route>
              <Route path="/Signup" element = {<Signup/>}></Route>
              <Route path="/Genrepage" element = {<Genrepage/>}></Route>
              <Route path="/Actordetail" element = {<Actordetail/>}></Route>
              <Route path="/Mainpage" element = {<Mainpage/>}></Route>              
              <Route path="/Moviedetail" element = {<Moviedetail/>}></Route>
              <Route path="/Myinfo" element = {<Myinfo/>}></Route>             
              <Route path="/Mylikes" element = {<Mylikes/>}></Route>
              <Route path="/Myposts" element = {<Myposts/>}></Route>
              <Route path="/Posting" element = {<Posting/>}></Route>          
              <Route path="/Reviewboard" element = {<Reviewboard/>}></Route>
              <Route path="/Moviedetail" element = {<Notice/>}></Route>
          </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;


