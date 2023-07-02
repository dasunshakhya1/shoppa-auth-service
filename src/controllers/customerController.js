import {
    createCustomerImpl,
    getAllCustomersImpl, getCustomerByEmailAndPasswordImpl,
    getCustomerByIdImpl,
    getCustomerByPkImpl
} from "../serviceImpls/customerServiceImpl.js";

export const signup = async (req, res) => {
    createCustomerImpl(req, res)
}

export const getCustomers = (req, res) => {
    getAllCustomersImpl(req, res);
}

export const getCustomerId = async (req, res) => {
    getCustomerByIdImpl(req, res)
}


export const getCustomerByEmail = (req, res) => {
    getCustomerByPkImpl(req, res)
}

export const login =(req,res)=>{
    getCustomerByEmailAndPasswordImpl(req,res)
}