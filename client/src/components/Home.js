import React from "react";

const Home = () => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch("/allposts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt"),
      }
    }).then(res => res.json())
    .then(res => {
      setData(res);
    })
  }, []);

  return(
    <div className="home">
      {
        data && data.posts.map( post => {
          return (
            <div className="card home-card" key={post._id}>
              <h5>{post.postedBy.name}</h5>
              <div className="card-image">
                <img src={post.photo} alt=""></img>
              </div>
              <div className="card-content">
                <i className="material-icons">favorite</i>
                <h6>{post.title}</h6>
                <p>{post.body}</p>
                <input type="text" placeholder="add a comment" />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home;