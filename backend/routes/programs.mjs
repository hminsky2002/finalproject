import express from "express";
import '../db.mjs';
import mongoose from "mongoose";
import {
     createProgram,
     deleteProgram,
     getProgram,
     getPrograms,
     updateProgram
} from "../controllers/programController.mjs";
const programRoutes = express.Router();


//get all programs
programRoutes.get('/', getPrograms);

//get a single program
programRoutes.get('/:id',getProgram);

//post a new program
programRoutes.post('/',createProgram)

//delete a program
programRoutes.delete('/:id',deleteProgram)

//Update a program
programRoutes.patch('/:id',updateProgram)


export{
     programRoutes
}
