import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import './db.mjs'
import session from 'express-session';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({
        extended: true
}));
app.set('view engine','hbs');

const Program = mongoose.model('Program');

app.get("/",(req,res) =>{
        res.render("index");
});

app.get("/add-program",(req,res) =>{
        res.render("add-program");
});

app.post("/add-program",(req,res) =>{
        const newProgram = new Program({
                programName: req.body.programName,
                //The description of the show, eg. "New indie and alternative music"
                description: req.body.description,
                //The host of the show, eg. "Sally Songsworth"
                host: req.body.host,
                //An object containing a start and end time for the show
                timeSlot: req.body.timeSlot
        })
        newProgram.save((err, saved) => {
                if (err) {
                        console.log(err);

                } else {
                        console.log(saved);
                        res.redirect('/');
                }
        });
});

app.get("/program-list",(req,res) =>{
        Program.find({}).exec((err,programs)=>{
                if(programs){
                        res.render('program-list',{programs:programs});
                }
                else{
                        res.render('program-list')
                }
        })
})


app.listen(process.env.PORT || 3000);
