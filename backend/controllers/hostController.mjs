import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const Host = mongoose.model('Host')

const createToken = (_id) =>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:"7d"});

}


const login = async (req,res) =>{
    const {email,password} = req.body;
    try{
        const host = await Host.login(email,password);
        const token = createToken(host._id);
        res.status(200).json({email,token});
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const registerHost = async (req,res) =>{
    const {firstName,lastName,email,password} = req.body;

    try{
        const host = await Host.register(firstName,lastName, email,password);
        const token = createToken(host._id);
        res.status(200).json({email,token});
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export{
    registerHost,
    login
}

