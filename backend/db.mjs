import mongoose from "mongoose";
import bcrypt from "bcrypt";


//schema for a program object that represents a show on the radio station
const programSchema = new mongoose.Schema({
    //the name of the program, eg. "New Afternoon Show"
    programName: {type:String,required:true},
    //The description of the show, eg. "New indie and alternative music"
    description: {type:String,required:true},
    //The host of the show, eg. "Sally Songsworth"
    dj: {type:String,required:true},
    //An object containing the day of week the show runs
    day: {
        id: {type:Number,
        required:true,
        min: 1,
        max: 7},
        value: {
            type:String,
            required:true,

        }
    },
    //start time of program
    startTime: {
        type: Number,
        required: true,
        min: 1,
        max: 24,
        unique: true,
    },
    //end time of program
    endTime: {
        type: Number,
        required: true,
        min: 1,
        max: 24,
        unique: true,
    }
});

const trackSchema= new mongoose.Schema({
    //the name of the track
    trackName: {type:String,required:true},
    //name of artist
    artist: {type:String,required:true},
    //track release date
    releaseDate: {type:Date,required:true}
});

//schema for a host/user of the admin portion of the page
const hostSchema = new mongoose.Schema({
    firstName: {type:String,required:true},
    lastName: {type:String, required:true},
    email: {type:String,required:true,unique:true},
    password: {type:String,required:true}

})

//schema for a past episode of a show
const episodeSchema = new mongoose.Schema({
    program: {type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
    host: {type: mongoose.Schema.Types.ObjectId, ref:'Host' },
    date: {type:Date}
})

hostSchema.statics.register = async function (firstName, lastName, email,password){

    if(!email || !password){
        throw Error('All Fields Must be Filled')
    }

    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const host = await this.create({firstName,lastName, email, password:hash})

    return host
}

hostSchema.statics.login = async function(email,password) {
    if(!email || !password){
        throw Error('All Fields Must be Filled')
    }
    const host = await this.findOne({email})
    if(!host){
        throw Error('Email does not exist')
    }
    const match = await bcrypt.compare(password,host.password)
    if(!match){
        throw Error('Invalid Login Credentials')
    }
    return host
}


mongoose.model('Program', programSchema);
mongoose.model('Track', trackSchema);
mongoose.model('Host', hostSchema);


