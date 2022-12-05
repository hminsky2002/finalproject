
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import './db.mjs';
import {modifyProgramRoutes} from "./routes/modifyPrograms.mjs";
import {hostRouter} from "./routes/hosts.mjs";
import {getProgramRoutes} from "./routes/getPrograms.mjs";
import * as path from "path";
import {fileURLToPath} from "url";
import cors from "cors";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);





const server = express();

//middleware
server.use(express.json());
server.use(cors())


//routes
server.use('/api/hosts',hostRouter);
server.use('/api/modifyPrograms',modifyProgramRoutes);
server.use('/api/getPrograms',getProgramRoutes);



mongoose.connect(`mongodb://${process.env.MONGO}/wnyu`).then(() => {
    console.log('mongoose connected!')
    // listen to port
    server.listen(process.env.PORT, () => {
        console.log('listening on', process.env.PORT)
    })
})
    .catch((err) => {
        console.log(err)
    })

