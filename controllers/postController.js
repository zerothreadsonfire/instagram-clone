import { Post } from "../models/Post.js";

// @method  GET
// @access  public
// @desc    Get all Posts
export const getPosts = (req, res) => {
  Post.find().populate("postedBy", "_id name email")
  .then( posts => {
    res.json({posts})
  })
  .catch(err => console.log(err))
}

// @method  POST
// @access  private
// @desc    Create a post
export const createPost = (req, res) => {
  const { title, body } = req.body;

  if(!title || !body) {
    return res.status(422).json({error: "Please add all the required fields"})
  }

  const newPost = new Post({
    title,
    body,
    postedBy: req.user
  })

  newPost.save()
  .then(savedPost => {
    res.json({post: savedPost})
  })
  .catch(err => {
    res.json({error: "Could not save post"})
  })
}