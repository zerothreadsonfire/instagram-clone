import React from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";

import { userContext } from "../App";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const {state, dispatch} = React.useContext(userContext);
  console.log(state);

  const navigate = useNavigate();

  const postData = () => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data);

      if(data.error) {
        M.toast({html: data.error, classes: "red darken-1"})
      } else {
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch({type: "USER", payload: data.user});
        M.toast({html: "Login Success", classes: "green darken-1"})
        navigate("/");
      }
    })
    .catch(err => console.log(err))
  }
  
  return(
    <div className="login-card">
      <div className="card cmp-card">
        <h2 className="brand-logo">Instagram</h2>
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn waves-effect waves-light blue darken-1 my-2" onClick={() => postData()}>Login</button>
        <p className="my-0">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div> 
    </div>
  )
}

export default Login;