import express from "express";
import {createUser, deleteUser, getUser, login} from "../controllers/userController.js";




const userRoute = express.Router()


userRoute.get("/:id", (req, res) => getUser(req, res))

userRoute.post("/signup",(req, res)=>createUser(req,res))
userRoute.post("/login",(req, res)=>login(req,res))

userRoute.delete("/:id",(req, res)=>deleteUser(req,res))




export default  userRoute