import {
    addCustomer,
    getAllCustomers,
    getCustomerById,
    getCustomerByPK,
    getCustomerGeneratedId
} from "../services/customerService.js";
import {comparePassword, hashPassword} from "../utils/password-util.js";


export const createCustomerImpl = async (req, res) => {
    const {firstName, lastName, email, password, address, firstContact, secondContact} = req.body
    const hashedPassword = await hashPassword(password)

    const [customer] = await getCustomerByPK(email)
    if (customer) {
        res.status(409).send({error: `Customer with email ${email} and mobile number ${firstContact} already exists.`})
    } else {
        const rows = await addCustomer({
            lastName,
            email,
            firstName,
            hashedPassword,
            address,
            firstContact,
            secondContact
        })
        if (rows.affectedRows > 0) {
            const [customer] = await getCustomerGeneratedId(email, firstContact)
            res.status(201).send({customer})
        } else {
            res.status(500).send({error: "Something terribly happen. Please try again later"})
        }
    }
}

export const getCustomerByPkImpl = async (req, res) => {
    const {email} = req.body
    const [cust] = await getCustomerByPK(email)
    if (cust) {
        const {userPassword, ...customer} = cust
        res.status(200).send({customer})
    } else {
        res.status(404).send({error: "Customer Not Found"})
    }
}


export const getCustomerByIdImpl = async (req, res) => {
    const id = req.params.id
    const [customer] = await getCustomerById(id)
    if (customer) {
        res.status(200).send({customer})
    } else {
        res.status(404).send({error: "Customer Not Found"})
    }
}

export const getAllCustomersImpl = async (req, res) => {
    const customers = await getAllCustomers()
    res.status(200).send({customers})
}

export const getCustomerByEmailAndPasswordImpl = async (req, res) => {
    const {email, password} = req.body
    const [customer] = await getCustomerByPK(email)

    if (customer) {
        const {userPassword, ...cust} = customer
        const isValidPassword = await comparePassword(password, userPassword)
        if (isValidPassword) {
            res.status(200).send({customer: cust})
        } else {
            res.status(403).send()
        }
    } else {
        res.status(404).send({error: "Incorrect email.Please try again."})
    }

}