import express from "express";
import '../db.mjs';
import mongoose from "mongoose";
import {
    getPrograms,
    getProgram, getCurrentProgram,
} from "../controllers/getProgramController.mjs";

const getProgramRoutes = express.Router();

//get all programs
getProgramRoutes.get('/', getPrograms);

//get a single program
getProgramRoutes.get('/:id',getProgram);

getProgramRoutes.get('/curr/getCurr',getCurrentProgram);


export {
    getProgramRoutes
}