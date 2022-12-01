import mongoose from "mongoose";

const Program = mongoose.model('Program');

//get all programs
const getPrograms = (req,res) =>{
    Program.find({}).exec((err,programs)=>{
        if(programs){
            res.render('program-list',{programs:programs});
        }
        else{
            res.render('program-list')
        }
    })
}


//get a single program
const getProgram = (req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404);
    }
    else {
        Program.findById(id).exec((err, program) => {
            if (err) {
                console.log(err)
            } else {
                res.render('program-list', program)
            }
        });
    }
}

//create new program
const createProgram = (req,res) =>{
    const {programName,description,host,timeSlot} = req.body;
    const newProgram = new Program({
        programName: programName,
        //The description of the show, eg. "New indie and alternative music"
        description: description,
        //The host of the show, eg. "Sally Songsworth"
        host: host,
        //An object containing a start and end time for the show
        timeSlot: timeSlot
    })
    newProgram.save((err, saved) => {
        if (err) {
            console.log(err);

        } else {
            console.log(saved);
            res.redirect('/');
        }
    });
}



//update a program


export{
    createProgram,
    getPrograms,
    getProgram
}


