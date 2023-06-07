import { MongoClient } from "mongodb";

let dbConnection;

export const connectToDb= async (cb)=>{
    try{
        const client= await MongoClient.connect('mongodb://0.0.0.0:27017/weather-data');
        dbConnection=client.db();
        cb();
    }
    catch(error){
        console.log(error);
        cb(error);
    }
}

export const getDb= ()=> dbConnection;