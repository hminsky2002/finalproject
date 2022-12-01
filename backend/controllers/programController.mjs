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
        return res.status(404).json({error: 'track does not exist'})
    }
    const program = await Program.findById(id);
    if(!program){
        return res.status(404).json({error:'track does not exist'})
    }
    res.status(200).json(program)
}
// create a new Program
const createProgram = async (req, res) => {
    const {programName, description, host, timeSlot} = req.body

    // add to the database
    try {
        const program = await Program.create({ programName, description, host, timeSlot})
        res.status(200).json(program)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a Program
const deleteProgram = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such Program'})
    }

    const program= await Program.findOneAndDelete({_id: id})

    if(!program) {
        return res.status(400).json({error: 'No such Program'})
    }

    res.status(200).json(program)
}

// update a program
const updateProgram = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such program'})
    }

    const program = await Program.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!program) {
        return res.status(400).json({error: 'No such program'})
    }

    res.status(200).json(program)
}


//update a program


export{
    createProgram,
    getPrograms,
    getProgram,
    deleteProgram,
    updateProgram
}

