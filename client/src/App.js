import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";
import { initialState, userReducer } from "./reducers/userReducer";

export const userContext = React.createContext();

const App = () => {
  const [state, dispatch] = React.useReducer(userReducer, initialState);

  const history = useNavigate();

  React.useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user) history("/");
    else history("/login");
  }, []);

  return (
    <div className="App">
      <userContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />}/> 
          <Route exact path="/signup" element={<SignUp />}/>
          <Route exact path="/profile" element={<Profile />}/>
          <Route exact path="/create" element={<CreatePost />}/>
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
