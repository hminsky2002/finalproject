import mongoose from "mongoose";


//schema for a program object that represents a show on the radio station
const programSchema = new mongoose.Schema({
    //the name of the program, eg. "New Afternoon Show"
    programName: String,
    //The description of the show, eg. "New indie and alternative music"
    description: String,
    //The host of the show, eg. "Sally Songsworth"
    host: String,
    //An object containing a start and end time for the show
    timeSlot: String
});


mongoose.model('Program', programSchema);
mongoose.connect('mongodb://127.0.0.1/wnyu');
