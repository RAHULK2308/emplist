const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/employee');

const Schema=mongoose.Schema;

const empschema=new Schema({
    Name:String,
    Email:String,
    Contact:Number,
    Date_of_Birth:String,
    Sex:String
    
})

var empData=mongoose.model('empdata',empschema);
module.exports=empData;