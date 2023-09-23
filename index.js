const express=require('express');
const app=express();
const Upcome=require('./models/upcome');
const Game=require('./models/game');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const connectDB= require('./config/db');
connectDB();

app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('Home');
});
app.get('/product',async (req,res)=>{
    const psgames=await Game.find({gametype:'PlayStation'});
    const xgames=await Game.find({gametype:'X-Box'});
    const pcgames=await Game.find({gametype:'PC'});
    const ansgames=await Game.find({gametype:'Androids'});
    res.render('product',{psgames:psgames,xgames:xgames,pcgames:pcgames,ansgames:ansgames});
});
app.get('/upcome',async (req,res)=>{
    const upcomes=await Upcome.find({});
    res.render('upcoming',{upcomes:upcomes});
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/soduko',(req,res)=>{
    res.render('sudoku');
});
app.get('/color',(req,res)=>{
    res.render('colorgame');
});
app.get('/canvas',(req,res)=>{
    res.render('canvas');
});



const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`listing on port ${PORT}`)
});