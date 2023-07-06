import {getDbConnection} from "../utils/mongo-util.js";
import {ObjectId} from "mongodb";
import e from "express";

const db = await getDbConnection()
const schema = db.collection("credentials")


export const getUserByObjId = (id) => {
    return schema.findOne({_id: new ObjectId(id)})
}

export const insertUser = (user) => {
    return schema.insertOne(user)
}

export const removeUser = (id) => {
    return schema.findOneAndDelete({_id: new ObjectId(id)})
}

export const getUserByEmail = (email)=>{
    return schema.findOne({email:email})
}