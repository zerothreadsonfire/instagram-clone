import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

import { JWT_SECRET } from "../config/keys.js";

import { User } from "../models/User.js";

// @desc    Landing Page
// @access  Public
// @method  GET
export const homePage = (req, res) => {
  res.send("welcome to Instagram clone!");
};

// @method  POST 
// @access  Public
// @desc    Sign Up
export const signUp = (req, res) => {
  const { name, email, password } = req.body;
  if(!email || !name || !password) {
    return res.status(422).json({
      error: "Please enter all fields"
    })
  }

  User.findOne({email: email})
  .then((savedUser) => {
    if(savedUser) return res.status(422).json({error: "User already exists"})

    bcryptjs.hash(password, 10)
    .then(hashedPassword => {
      const newUser = new User({
        email,
        password: hashedPassword,
        name
      });
  
      newUser.save()
      .then(user => {
        res.json({message: "successfully registered!"});
      })
      .catch(err => res.json({error: "User creation failed!"}))
    })
    .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
  
}

// @method  POST 
// @access  Public
// @desc    Login
export const login = (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    res.status(422).json({error: "Please enter email or password"})
  } 

  User.findOne({email: email})
  .then(savedUser => {
    if(!savedUser) return res.status(422).json({error: "Invalid email/password"})

    bcryptjs.compare(password, savedUser.password)
    .then(doMatch => {
      if(doMatch === true) {
        // res.json({message: "successfull login"});
        const token = jsonwebtoken.sign({_id: savedUser._id}, JWT_SECRET);
        res.json({token});
      } 
      else res.json({error: "Invalid email/password"})
    }) 
    .catch(err => console.log(err));
  })
}