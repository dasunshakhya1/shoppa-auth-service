import express from "express";
import {
    signup,
    getCustomerByEmail,
    getCustomerId,
    getCustomers, login
} from "../controllers/customerController.js";
import {signupSchema} from "../schemas/customerSchema.js";
import {postErrorHandling} from "../middlewares/errorHandleMiddleware.js";


const customerRouter = express.Router()


customerRouter.get("/:id", (req, res) => getCustomerId(req, res))

customerRouter.get("/", (req, res) => getCustomers(req, res))

customerRouter.post("/signup",signupSchema,postErrorHandling,(req,res)=>signup(req,res))

customerRouter.post("/",(req, res)=>getCustomerByEmail(req,res))

customerRouter.post("/login",(req,res)=>login(req,res))

export default customerRouter