const express= require ("express")
const { default: mongoose } = require("mongoose")
require("dotenv").config()
const cors=require("cors")
const http=require("http")
const {Server}=require("socket.io")
const Message = require("./models/message")

const app=express()

const server=http.createServer(app)

const io=new Server(server,{
    cors:{
        origin:"*"
    }
})


io.on("connection",(socket)=>{
    console.log("User connected")
    socket.on("sendMessage",(message)=>{
        console.log("message received on server",message)
        io.emit("receiveMessage",message)
    })
    socket.on("disconnect",()=>{
        console.log("User disconnected")
    })
})

//middleware
app.use(express.json())
app.use(cors())

app.set("io",io)

app.use("/api",require("./routes/auth"))
app.use("/api/books",require("./routes/book"))
app.use("/api/messages",require("./routes/message"))
app.use("/api/summary",require("./routes/summary"))


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

server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})



console.log("STATE:", mongoose.connection.readyState);