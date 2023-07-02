import {validationResult} from "express-validator";

export const validateRequests = (err, req, res, next) => {
    console.log("oooppppoppoopoopopfasopfasdfasdfasfds")
    if (err) {
        res.status(422).send(err)
    }
    next()
}


export const postErrorHandling = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).send(errors.array())
    }
    next()
}
