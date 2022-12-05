import express from "express";
import '../db.mjs';
import mongoose from "mongoose";
import {
     createProgram,
     deleteProgram,
     updateProgram
} from "../controllers/modifyProgramController.mjs";
import {requireAuth} from "../middleware/requireAuth.mjs";
const modifyProgramRoutes = express.Router();

//require authorization for all program modifying routes
modifyProgramRoutes.use(requireAuth);

//post a new program
modifyProgramRoutes.post('/',createProgram)

//delete a program
modifyProgramRoutes.delete('/:id',deleteProgram)

//Update a program
modifyProgramRoutes.patch('/:id',updateProgram)


export{
     modifyProgramRoutes
}
