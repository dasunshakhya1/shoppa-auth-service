import {MongoClient} from "mongodb";


const url = process.env.MONGODB_URL
const maxPoolSize = process.env.MONGO_POOL_SIZE;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const client = new MongoClient(url, {maxPoolSize, ...options});
const connectToDB = async () => {
    let dbConnection;
    try {
        dbConnection = await client.connect();
    } catch (err) {
        console.log(err)
    }

    return dbConnection.db(process.env.MONGO_SCHEMA); // Replace with your database name
}

const _dbPromise = connectToDB();


export const getDbConnection = () => {
    return _dbPromise;
}



