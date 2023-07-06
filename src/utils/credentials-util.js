import jwt from 'jsonwebtoken'
import crypto from "crypto";


export const genPassword = (password) => {
    const salt = crypto.randomBytes(32).toString('hex')
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return {salt, hash}
}


export const validatePassword = (password, hash, salt) => {
    const generatedHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return hash === generatedHash
}

export const issueJWT = (user) => {
    const {_id} = user
    const expiresIn = '15m'

    const payload = {
        sub: _id,
        iat: Date.now()
    }

    const signedToken = jwt.sign(payload, process.env.PRIVATE_KEY, {expiresIn, algorithm: 'RS256'})


    return {
        token: "Bearer " + signedToken,
        expires: expiresIn
    }
}
