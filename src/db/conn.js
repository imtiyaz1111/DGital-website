const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/fullstack_website", {
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successfuly")
}).catch((error)=>{
    console.log(error)
})