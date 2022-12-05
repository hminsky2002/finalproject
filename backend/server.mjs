
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import './db.mjs';
import {modifyProgramRoutes} from "./routes/modifyPrograms.mjs";
import {hostRouter} from "./routes/hosts.mjs";
import {getProgramRoutes} from "./routes/getPrograms.mjs";

const server = express();

//middleware
server.use(express.json());


//routes
server.use('/api/hosts',hostRouter);
server.use('/api/modifyPrograms',modifyProgramRoutes);
server.use('/api/getPrograms',getProgramRoutes);




mongoose.connect(`mongodb://${process.env.PORT}/wnyu`).then(() => {
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

