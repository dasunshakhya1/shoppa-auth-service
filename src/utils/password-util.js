import bcrypt from 'bcrypt'

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt()
    return bcrypt.hash(password, salt)
}

export const comparePassword = (providedPassword, dbPassword) => {
    return bcrypt.compare(providedPassword, dbPassword)
}