import mongoose from "mongoose";

try{
    mongoose.connect("mongodb://localhost:27017/DBName")
    console.log("DB Connected Successfully");
}catch(error){
    console.log("Error",error)
}
const schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

export default mongoose.model("user",schema)