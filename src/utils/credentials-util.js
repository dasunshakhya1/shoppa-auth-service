import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt()
    return bcrypt.hash(password, salt)
}

export const comparePassword = (providedPassword, dbPassword) => {
    return bcrypt.compare(providedPassword, dbPassword)
}


export const jwtSign = (data) => {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' })
}

export const jwtVerify = (req,res) => {
    jwt.verify(data, process.env.ACCESS_TOKEN_SECRET,(err,data)=>{

    })
}