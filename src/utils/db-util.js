import mysql from 'mysql2'

const connectionPool = mysql.createPool({
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    host: process.env.DB_HOST_URL,
    database: process.env.DB_SCHEMA
})

export const POOL = connectionPool.promise()


