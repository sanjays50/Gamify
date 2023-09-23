const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const upcomeSchema=new Schema({
    imagename:{type : String,required:true},
    gamename:{type : String,required:true},
});


module.exports=mongoose.model('Upcome',upcomeSchema);