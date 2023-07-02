import {
    createCustomer,
    findAllCustomers,
    findCustomerById,
    findCustomerByPK,
    findCustomerIdByPk
} from "../reposiotries/customerRepository.js";


export const getCustomerByPK = (email) => {
    return findCustomerByPK(email)
}

export const addCustomer = ({firstName, lastName, email, hashedPassword, address, firstContact, secondContact}) =>
    createCustomer({firstName, lastName, email, hashedPassword, address, firstContact, secondContact})

export const getCustomerById = (id) => findCustomerById(id)

export const getAllCustomers = () => findAllCustomers()

export const getCustomerGeneratedId = (email, firstContact) => findCustomerIdByPk(email, firstContact)

export  const getCustomerByCredentials = (email)=>findCustomerByPK(email)