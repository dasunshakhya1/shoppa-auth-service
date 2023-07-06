import express from "express";

import dotenv from 'dotenv'
import {pass} from "./passport.js";

// js files related imports
import morgan from "./morgan.js";


// routes
import userRoute from "../routes/userRoute.js";


console.log(process.env.PRIVATE_KEY)


const app = new express()


dotenv.config()
app.use(express.json())
app.use(morgan)
app.use(pass.initialize());
app.use("/users",pass.authenticate('jwt',{session:false}), userRoute)

export default app