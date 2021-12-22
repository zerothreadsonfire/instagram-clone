import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />}/> 
          <Route exact path="/signup" element={<SignUp />}/>
          <Route exact path="/profile" element={<Profile />}/>
          <Route exact path="/create" element={<CreatePost />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
