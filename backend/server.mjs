import express from 'express';
import path from 'path';
import url from 'url';
import mongoose from 'mongoose';
import './db.mjs';
import session from 'express-session';
import {programRoutes} from "./routes/programs.mjs";

const server = express();

// const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
// server.use(express.static(path.join(__dirname, '../general')));
// server.use(express.urlencoded({
//         extended: true
// }));
// server.set('view engine','hbs');

// const Program = mongoose.model('Program');
// const Track = mongoose.model('Track');





//middleware
server.use(express.json());


//routes
server.use('/api/programs',programRoutes);


//
// server.get("/",(req, res) =>{
//         res.render("index");
// });
//
// server.get("/add-program",(req, res) =>{
//         res.render("add-program");
// });
//
// server.get("/add-tracks",(req, res) =>{
//         res.render("add-tracks");
// });
// server.post("/add-tracks",(req, res) =>{
//         const newTrack = new Track({
//                 trackName: req.body.trackName,
//                 //name of artist
//                 artist: req.body.artist,
//                 //track release date
//                 releaseDate: req.body.releaseDate
//         })
//         newTrack.save((err, saved) => {
//                 if (err) {
//                         console.log(err);
//
//                 } else {
//                         console.log(saved);
//                         res.redirect('/');
//                 }
//         });
// });
//
// server.post("/add-program",(req, res) =>{
//         const newProgram = new Program({
//                 programName: req.body.programName,
//                 //The description of the show, eg. "New indie and alternative music"
//                 description: req.body.description,
//                 //The host of the show, eg. "Sally Songsworth"
//                 host: req.body.host,
//                 //An object containing a start and end time for the show
//                 timeSlot: req.body.timeSlot
//         })
//         newProgram.save((err, saved) => {
//                 if (err) {
//                         console.log(err);
//
//                 } else {
//                         console.log(saved);
//                         res.redirect('/');
//                 }
//         });
// });
//
// server.get("/program-list",(req, res) =>{
//         Program.find({}).exec((err,programs)=>{
//                 if(programs){
//                         res.render('program-list',{programs:programs});
//                 }
//                 else{
//                         res.render('program-list')
//                 }
//         })
// })
//
mongoose.connect('mongodb://localhost/wnyu').then(() => {
    console.log('mongoose connected!')
    // listen to port
    server.listen(process.env.PORT, () => {
        console.log('listening on', process.env.PORT)
    })
})
    .catch((err) => {
        console.log(err)
    })
server.listen(process.env.PORT || 4000);

