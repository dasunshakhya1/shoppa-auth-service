import express from "express";
import customerRouter from "../routes/customerRoute.js";
import {validateRequests} from "../middlewares/errorHandleMiddleware.js";


const app = new express()

app.use(express.json())

app.use("/users/customer",customerRouter)


app.use((err, req, res, next) => {
    if (err.code === 'ECONNREFUSED') {
        res.status(500).json({ error: 'Unable to connect to the database' });
    } else {
        res.status(err.status || 500).json({
            error: {
                message: err.message || 'Internal Server Error',
            },
        });
    }
});

export default  app