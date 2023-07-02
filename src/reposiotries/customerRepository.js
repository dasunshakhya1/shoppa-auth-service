import {POOL} from "../utils/db-util.js";


const executeQuery = async (query) => {
    const [data] = await POOL.query(query)
    return data
}

export const createCustomer = ({firstName, lastName, email, hashedPassword, address, firstContact, secondContact}) => {
    const query = `INSERT INTO users.customers (id, firstName, lastName, email,
                                                userPassword, address, firstContact, secondContact)
                   values (UUID(),
                           "${firstName}", "${lastName}", "${email}", "${hashedPassword}",
                           "${address}", "${firstContact}", "${secondContact}")`

    return executeQuery(query)
}


export const findCustomerByPK = (email) => {
    const query = `SELECT *
                   FROM users.customers
                   WHERE email = "${email}"`
    return executeQuery(query)
}

export const findCustomerIdByPk = (email, firstContact) => {
    const query = `SELECT id
                   FROM users.customers
                   WHERE email = "${email}"
                      OR firstContact = "${firstContact}"`
    return executeQuery(query)
}

export const findCustomerById = (id) => {
    const query = `SELECT id,
                          firstName,
                          lastName,
                          email,
                          address,
                          firstContact,
                          secondContact
                   FROM users.customers
                   WHERE id = "${id}"`
    return executeQuery(query)
}

export const findAllCustomers = () => {
    const query = `SELECT id,
                          firstName,
                          lastName,
                          email,
                          address,
                          firstContact,
                          secondContact
                   FROM users.customers`
    return executeQuery(query)
}

