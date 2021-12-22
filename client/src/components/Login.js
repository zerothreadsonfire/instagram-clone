import { Link } from "react-router-dom";

const Login = () => {
  return(
    <div className="login-card">
      <div className="card cmp-card">
        <h2 className="brand-logo">Instagram</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn waves-effect waves-light blue darken-1 my-2">Login</button>
        <p className="my-0">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div> 
    </div>
  )
}

export default Login;