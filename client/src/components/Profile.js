import React from "react";
import { userContext } from "../App";

const Profile = () => {
  const [posts, setPosts] = React.useState([]);
  const {state, dispatch} = React.useContext(userContext);

  React.useEffect(() => {
    fetch("/myposts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      }
    }).then(res => res.json())
    .then(res => setPosts(res.posts))
  }, []);

  return(
    <div style={{maxWidth: "550px", margin: "0px auto"}}>
      <div style={{display:"flex", justifyContent:"space-around", margin:"18px 0", borderBottom: "1px solid grey"}}>
        <div>
          <img style={{width: "160px", height: "160px", borderRadius: "80px"}} alt="" src="https://images.unsplash.com/photo-1640103998727-2351128b0fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
        </div>
        <div>
          <h4>{state.name}</h4>
          <div style={{display: "flex", justifyContent: "space-between", width:"108%"}}>
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>

      <div className="gallery">
        {
          posts.map( post => {
            return (
              <img className="item" alt={post.title} src={post.photo} key={post._id}></img>
            )
          })
        }
      </div>
    </div>
  )
}

export default Profile;