import {addUser, deleteUserById, getUserById, verifyUser} from "../services/userService.js";

export const getUser = (req, res) => {
    getUserById(req, res)
}


export const createUser = (req, res) => {
    addUser(req, res)
}



export const deleteUser = (req,res)=>{
    deleteUserById(req,res)
}


export  const login =(req,res)=>{
    verifyUser(req,res)
}