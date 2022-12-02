
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import './db.mjs';
import {programRoutes} from "./routes/programs.mjs";
import {hostRouter} from "./routes/hosts.mjs";

const server = express();

//middleware
server.use(express.json());


//routes
server.use('/api/programs',programRoutes);
server.use('/api/hosts',hostRouter);


mongoose.connect('mongodb://localhost/wnyu').then(() => {
    console.log('mongoose connected!')
    // listen to port
    server.listen(process.env.PORT, () => {
        console.log('listening on', process.env.PORT)
    })
})
    .catch((err) => {
        console.log(err)
    })
server.listen(process.env.PORT || 4000);

