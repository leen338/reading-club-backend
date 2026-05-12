const mongoose=require("mongoose")

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String
    },
    pdf:{
        type:String
    },
    cover:{
        type:String
    },
    audio:{
        type:String
    },
    price:{
        type:Number,
        default: 0
    },
    summary:{
        type:String
    },
    description:{
        type:String
    },
    isPaid:{
        type:Boolean,
        default:false
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

const Book=mongoose.model("Book",bookSchema)
module.exports=Book


