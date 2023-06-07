import express from 'express';
import cors from 'cors';
import { connectToDb, getDb } from './db.js';
import { ObjectId } from 'mongodb';

const app = express();
app.use(cors());
app.use(express.json());

let db;

connectToDb((error) => {
  if (!error) {
    app.listen(8000, () => {
      console.log('Server running on port 8000');
    });
    db = getDb();
  } else {
    console.log(error);
  }
});

app.get('/get-data', async (req, res) => {
  try {
    const weatherData= await db.collection('weather').find().toArray();
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ Error: 'Failed fetching data' });
  }
});

app.post('/store-data', async (req, res) => {
  const id= req.body.location.name;
  const weatherData= await db.collection('weather').find().toArray();
  let present=null;
  weatherData.forEach(element => {
    if(element.location.name==id)present=element;
  });
  if(present){
    try{
      await db.collection('weather').deleteOne(present);
    }
    catch(error){
      res.status(500).json({"Error":"Failed to remove redundancy"});
    }
  }
  try{
    await db.collection('weather').insertOne(req.body);
    res.status(200).json("Data inserted Successfully");
  }
  catch(error){
    res.status(500).json({"Error":"Data not inserted"});
  }
});
//change this such that when same entry is added, old one is deleted and overwritten by new one

app.delete('/delete-data:id', async (req,res) => {
  try{
    await db.collection('weather').deleteOne({"_id":ObjectId(req.params.id)});
    res.status(200).json("item deleted successfully");
  }
  catch(error){
    res.status(500).json({"Error":"item not deleted"});
  }
});

