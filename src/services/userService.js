import {getUserByEmail, getUserByObjId, insertUser, removeUser} from "../reposiotries/userRepository.js";
import {genPassword, issueJWT, validatePassword} from "../utils/credentials-util.js";

export const getUserById = async (req, res) => {
    const id = req.params.id
    const _user = await getUserByObjId(id)
    if (_user) {
        const {salt, hash, ...user} = _user
        res.send(user)
    } else {
        res.status(404).send({error: `User with ID ${id} not found`})
    }
}

export const verifyUser = async (req, res) => {
    const {email, password} = req.body
    const _user = await getUserByEmail(email)
    if (!_user) {
        res.sendStatus(403)
    } else {
        const jwt = issueJWT(_user)
        const isValidUser = validatePassword(password, _user.hash, _user.salt)
        if (isValidUser) {
            res.status(200).send({jwt})
        } else {
            res.sendStatus(403)
        }
    }
}

export const addUser = async (req, res) => {
    const {firstName, lastName, email, password, address, firstContact, secondContact} = req.body
    const {salt, hash} = genPassword(password)
    const _user = await getUserByEmail(email)
    if (!_user) {
        const user = await insertUser({firstName, lastName, email, salt, hash, address, firstContact, secondContact})
        res.send(user)
    } else {
        res.status(409).send({error: `User with email ${email} already exists.`})
    }
}

export const deleteUserById = async (req, res) => {
    const id = req.params.id
    const {value} = await removeUser(id)
    if (value) {
        res.sendStatus(204)
    } else {
        res.status(404).send({error: `User with ID ${id} not found`})
    }
}


