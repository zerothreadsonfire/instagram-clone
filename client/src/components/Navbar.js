import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { userContext } from "../App";

const Navbar = () => {
  const {state, dispatch} = React.useContext(userContext);

  const navigate = useNavigate();

  const renderList = () => {
    if(state) {
      return [
        <li key="1"><Link to="/profile">Profile</Link></li>,
        <li key="2"><Link to="/create">Create Post</Link></li>,
        <li>
          <button className="btn red darken-1 my-2" onClick={() => {
            localStorage.clear();
            dispatch({type: "CLEAR"});
            navigate("/login");
          }}>Logout</button>
        </li>
      ]
    } else {
      return [
        <li key="1"><Link to="/login">Login</Link></li>,
        <li key="2"><Link to="/signup">SignUp</Link></li> 
      ]
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={state ? "/" : "/login"} className="brand-logo left">Instagram</Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;