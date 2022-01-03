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

// @method  GET
// @access  private
// @desc    Get all Posts by a Single User
export const getUserPosts = (req, res) => {
  Post.find({postedBy: req.user._id}).populate("postedBy", "_id name email")
  .then( posts => {
    res.json({posts})
  })
  .catch(err => console.log(err))
}

// @method  POST
// @access  private
// @desc    Create a post
export const createPost = (req, res) => {
  const { title, body, imageUrl } = req.body;

  if(!title || !body || !imageUrl) {
    return res.status(422).json({error: "Please add all the required fields"})
  }

  const newPost = new Post({
    title,
    body,
    photo:imageUrl,
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