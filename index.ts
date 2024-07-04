import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';

import eventRoutes from './routes/eventRoutes';
import locationRoutes from './routes/locationRoutes';

import mongoose from 'mongoose'


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/api',eventRoutes)
app.use('/api',locationRoutes)

mongoose.connect("mongodb+srv://anandkole1:anandk123@cluster2.j86ohn4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2")
  .then(() => console.log("MongoDb is connected"))
  .catch((err: any) => console.log(err))


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
