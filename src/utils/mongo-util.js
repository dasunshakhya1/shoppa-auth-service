import {MongoClient} from "mongodb";

const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection URL

const maxPoolSize = 10;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const client = new MongoClient(url, {maxPoolSize, ...options});
const connectToDB = async () => {
    await client.connect();
    return client.db('user-auth'); // Replace with your database name
}

const _dbPromise = connectToDB();

// Export a function to retrieve a connection from the connection pool
export const getDbConnection = () => {
    return _dbPromise;
}



