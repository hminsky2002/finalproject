import mongoose from "mongoose";

const Program = mongoose.model('Program')

// create a new Program
const createProgram = async (req, res) => {
    const {programName, description, dj, day,startTime,endTime} = req.body
    let emptyFields = []

    if(!programName){
        emptyFields.push('programName')
    }
    if(!description) {
        emptyFields.push('description')
    }
    if(!dj) {
        emptyFields.push('dj')
    }
    if(!day) {
        emptyFields.push('day')
    }
    if(!startTime){
        emptyFields.push('startTime')
    }
    if(!endTime){
        emptyFields.push('endTime')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in all the fields",emptyFields})
    }
    // add to the database
    try {
        const program = await Program.create({ programName, description, dj, day, startTime,endTime})
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
    deleteProgram,
    updateProgram
}


