const Home = () => {
  return(
    <div className="home">
      <div className="card home-card">
        <h5>Ramesh</h5>
        <div className="card-image">
          <img src="https://images.pexels.com/photos/10344100/pexels-photo-10344100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
        </div>
        <div className="card-content">
          <i className="material-icons">favorite</i>
          <h6>Title</h6>
          <p>Thi is a post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  )
}

export default Home;