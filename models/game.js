const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const gameSchema=new Schema({
    gametype:{type : String,required:true},
    gamename:{type : String,required:true},
    image:{type : String,required:true},
    edition:{type : String,required:true},
    price:{type : String,required:true},
});


module.exports=mongoose.model('Game',gameSchema);