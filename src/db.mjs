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

const trackSchema= new mongoose.Schema({
    //the name of the track
    trackName: String,
    //name of artist
    artist: String,
    //track release date
    releaseDate: String
});

mongoose.model('Program', programSchema);
mongoose.model('Track', trackSchema);
mongoose.connect('mongodb://localhost/wnyu');
