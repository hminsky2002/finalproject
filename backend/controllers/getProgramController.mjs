import mongoose from "mongoose";

const Program = mongoose.model('Program')

//get all programs
const getPrograms = async (req,res) =>{
    const programs = await Program.find({})
    res.status(200).json(programs)
}


//get a single program
const getProgram = async (req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Program does not exist'})
    }
    const program = await Program.findById(id);
    if(!program){
        return res.status(404).json({error:'Program does not exist'})
    }
    res.status(200).json(program)
}

const getCurrentProgram = async(req,res) =>{
    const {day,time} = req.headers;

    const program = await Program.findOne({"day.id":day,$and: [{startTime: { $lte: time}},{endTime: {$gte: time}}]})
    if(!program){
        res.status(200).json({message:"No Program Currently Playing"})
    }
    else{
        res.status(200).json(program)
    }

}

export{
    getProgram,
    getPrograms,
    getCurrentProgram
}