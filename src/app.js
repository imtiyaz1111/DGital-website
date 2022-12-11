const express=require("express")
const app=express();
const path=require("path")
const hbs=require("hbs")
const port=process.env.PORT || 8000
require("./db/conn")
const Contact=require("./modles/contactmessage")


const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")

app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views",template_path)
hbs.registerPartials(partials_path)

app.get("/",(req,res) =>{
    res.render("index")
})


app.get("/about",(req,res) =>{
    res.render("about")
})
app.get("/service",(req,res) =>{
    res.render("service")
})
app.get("/project",(req,res) =>{
    res.render("project")
})
app.get("/our-team",(req,res) =>{
    res.render("ourteam")
})
app.get("/testimonials",(req,res) =>{
    res.render("testimonials")
})
app.get("/contact",(req,res) =>{
    res.render("contact")
})
app.post("/contact", async(req,res)=>{
    try {
        const contactData= new Contact(req.body)
        await contactData.save();
        res.status(201).render("index")
        
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("*",(req,res) =>{
    res.render("error")
})

app.listen(port,()=>{
    console.log(`listening the port no ${port}`)
})