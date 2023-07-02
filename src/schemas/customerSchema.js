import {checkSchema} from "express-validator";


export const signupSchema = checkSchema({
    firstName: {
        notEmpty: true,
        exists: true,
        isAlpha: true,
        escape: true,
        isLength: {
            options: {
                min: 2,
                max: 30
            }
        }
    },
    lastName: {
        notEmpty: true,
        exists: true,
        isAlpha: true,
        escape: true,
        isLength: {
            options: {
                min: 2,
                max: 30
            }
        }
    },
    email: {
        notEmpty: true,
        exists: true,
        escape: true,
        isEmail: true,
        isLength: {
            options: {
                min: 4,
                max: 30
            }
        }

    },
    password: {
        notEmpty: true,
        exists: true,
        isAlphanumeric: true,
        escape: true,
        isLength: {
            options: {
                min: 8,
                max: 30
            }
        }
    },
    address: {
        notEmpty: true,
        exists: true,
        isAlphanumeric: true,
        escape: true,
        isLength: {
            options: {
                min: 2,
                max: 30
            }
        }
    },
    firstContact: {
        notEmpty: true,
        exists: true,
        escape: true,
        matches: {
            options: /^(0)[0-9]{9}$/
        },
        isLength: {
            options: {
                min: 10,
                max: 10
            }
        }
    },
    secondContact: {
        exists: {
            options: (val) => {
                val.matches(/^""|(0)[0-9]{9}$/)
            }
        },
        escape: true,
        isLength: {
            options: {
                min: 0,
                max: 10
            }
        }
    }
})