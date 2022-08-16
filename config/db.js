const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config();

function connectDB(){
    mongoose.connect(process.env.URL)
    .then(()=>{
        console.log('database connected.');
    }).catch((err)=>{
        console.log('connection failed.');
    })

    // const connection=mongoose.connection;

    // connection.once('open',()=>{
    //     console.log('database connected.');
    // }).catch((err)=>{
    //     console.log('connection failed.');
    // });
}

module.exports=connectDB;