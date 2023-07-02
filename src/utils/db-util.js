import mysql from 'mysql2'

const connectionPool = mysql.createPool({
    password: "root", user: "root", host: "localhost", database: "users"
})

export  const POOL = connectionPool.promise()


