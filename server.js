const express= require ("express")
const { default: mongoose } = require("mongoose")
require("dotenv").config()
const app=express()
const cors=require("cors")

//middleware
app.use(express.json())
app.use(cors())


app.use("/api",require("./routes/auth"))
app.use("/api/books",require("./routes/book"))
app.use("/api/messages",require("./routes/message"))


//connect to mongodb
mongoose.connect(process.env.MONGO_URL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})
.then(()=>console.log("Mongodb connected"))
.catch(err=>console.log("Mongodb connection error",err))

//simple route 
app.get("/",(req,res)=>{
    res.send("welcome to reading club API")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})