import { Link } from "react-router-dom";

const SignUp = () => {
  return(
    <div className="login-card">
      <div className="card cmp-card">
        <h2 className="brand-logo">Instagram</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn waves-effect waves-light blue darken-1 my-2">Sign Up</button>
        <p className="my-0">Already have an account? <Link to="/login">Login</Link></p>
      </div> 
    </div>
  )
}

export default SignUp;