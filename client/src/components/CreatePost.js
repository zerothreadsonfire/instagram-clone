import React from "react";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";

const CreatePost = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [image, setImage] = React.useState();
  const [url, setUrl] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    if(url) {
      fetch("/createpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+localStorage.getItem("jwt")
        },
        body: JSON.stringify({
          title,
          body,
          imageUrl: url,
        })
      }).then(res => res.json())
      .then(data => {
        if(data.error) {
          M.toast({html: data.error, classes: "red darken-1"})
        } else {
          M.toast({html: "Post created Success", classes: "green darken-1"})
          navigate("/");
        }
      })
      .catch(err => console.log(err))
    } 
  }, [url])

  const postImageData = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram-clone");
    data.append("cloud_name", "darkestclouds");

    fetch("https://api.cloudinary.com/v1_1/darkestclouds/image/upload", {
      method: "POST",
      body: data
    }).then(res => res.json())
    .then( data => {
      setUrl(data.url);
    })
    .catch(err => console.log(err));
  }

  return(
    <div className="card input-field" style={{margin: "30px auto", maxWidth: "500px", padding: "20px", textAlign:"center"}}>
      <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
      <input type="text" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)}></input>
      <div className="file-field input-field">
        <div className="btn blue darken-1">
          <span>Upload Image</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn waves-effect waves-light blue darken-1 my-2" onClick={() => postImageData()}>Submit Post</button>
    </div>
  )
}

export default CreatePost;
