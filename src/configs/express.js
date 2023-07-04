import express from "express";
import customerRouter from "../routes/customerRoute.js";
import morgan from "./morgan.js";
import dotenv from "dotenv";

dotenv.config();


const app = new express()


app.use(express.json())
app.use(morgan)


app.use("/users/customer", customerRouter)



export default app