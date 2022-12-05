import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const Host = mongoose.model('Host')

const requireAuth = async (req,res,next) => {
    // verify authentication
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }
    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        console.log(_id)
        req.body.host = await Host.findOne({_id}).select('_id')
        next()
    } catch(error){
        console.log(error)
        res.status(401).json({error: 'Request Is NOT authorized, you fiend'})
    }

}

export{
    requireAuth
}