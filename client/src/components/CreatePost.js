const CreatePost = () => {
  return(
    <div className="card input-field" style={{margin: "30px auto", maxWidth: "500px", padding: "20px", textAlign:"center"}}>
      <input type="text" placeholder="title"></input>
      <input type="text" placeholder="body"></input>
      <div class="file-field input-field">
        <div className="btn blue darken-1">
          <span>Upload Image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input class="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn waves-effect waves-light blue darken-1 my-2">Submit Post</button>
    </div>
  )
}

export default CreatePost;
