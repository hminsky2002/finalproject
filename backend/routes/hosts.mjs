import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {login, registerHost} from "../controllers/hostController.mjs";
const hostRouter = express.Router();


//route for getting the page to register a new host
hostRouter.post('/register', registerHost);

hostRouter.post('/login', login);

export{
    hostRouter
}



