import jsonwebtoken from "jsonwebtoken";
import mongoose from "mongoose";

import { JWT_SECRET } from "../config/keys.js";

import { User } from "../models/User.js";

export const requireLogin = (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(401).json({error: "You must be logged in to access this page"})
  } 

  const token = authorization.replace("Bearer ", "");
  jsonwebtoken.verify(token, JWT_SECRET, (error, payload) => {
    if(error) {
      return res.status(401).json({error: "You are not authorized"})
    }

    const {_id} = payload;
    User.findById(_id)
    .then(userData => {
      req.user = userData;
      next();
    })
  
  })

}