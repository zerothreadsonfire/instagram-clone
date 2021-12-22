const Profile = () => {
  return(
    <div style={{maxWidth: "550px", margin: "0px auto"}}>
      <div style={{display:"flex", justifyContent:"space-around", margin:"18px 0", borderBottom: "1px solid grey"}}>
        <div>
          <img style={{width: "160px", height: "160px", borderRadius: "80px"}} alt="" src="https://images.unsplash.com/photo-1640103998727-2351128b0fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
        </div>
        <div>
          <h4>Ramesh Verma</h4>
          <div style={{display: "flex", justifyContent: "space-between", width:"108%"}}>
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>

      <div className="gallery">
        <img className="item" alt="" src="https://images.pexels.com/photos/10255277/pexels-photo-10255277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        <img className="item" alt="" src="https://images.pexels.com/photos/10255277/pexels-photo-10255277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        <img className="item" alt="" src="https://images.pexels.com/photos/10255277/pexels-photo-10255277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        <img className="item" alt="" src="https://images.pexels.com/photos/10255277/pexels-photo-10255277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        <img className="item" alt="" src="https://images.pexels.com/photos/10255277/pexels-photo-10255277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        <img className="item" alt="" src="https://images.pexels.com/photos/10255277/pexels-photo-10255277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
      </div>
    </div>
  )
}

export default Profile;