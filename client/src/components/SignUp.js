import React from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const postData = () => {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }).then(res => res.json())
    .then(data => {
      if(data.error) {
        M.toast({html: data.error, classes: "red darken-1"})
      } else {
        M.toast({html: data.message, classes: "green darken-1"})
        navigate("/login");
      }
    })
    .catch(err => console.log(err));
  }

  return(
    <div className="login-card">
      <div className="card cmp-card">
        <h2 className="brand-logo">Instagram</h2>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn waves-effect waves-light blue darken-1 my-2" onClick={() => postData()}>Sign Up</button>
        <p className="my-0">Already have an account? <Link to="/login">Login</Link></p>
      </div> 
    </div>
  )
}

export default SignUp;