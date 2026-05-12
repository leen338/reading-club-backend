const express =require("express")
const router=express.Router()
const auth=require("../middleware/auth")
const Book=require("../models/book")
const sendEmail=require("../utils/sendEmail")


//post/api/books
router.post("/",auth,async(req,res)=>{
    try{
        const{title,author,category,pdf,cover,audio,price,summary,description,isPaid}=req.body
        const newBook=new Book({
            title,
            author,
            category,
            pdf,
            cover,
            audio,
            price,
            summary,
            description,
            isPaid,
            addedBy:req.user.id
        })
        await newBook.save()
        res.status(201).json(newBook)
    }catch(err){
        console.error(err.message)
        res.status(500).send("server error")
    }
})
//get/api/book
router.get("/",auth,async(req,res)=>{
    try{
        const books=await Book.find().populate("addedBy","name email")
        res.json(books)
    }catch(err){
        console.log(err.message)
        res.status(500).json("server error")
    }
})


router.get("/:id",auth,async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id).populate("addedBy","name email")
        res.json(book)
    }catch(err){
        console.log(err.message)
        res.status(500).json("server error")
    }
})

//put/api/book
router.put("/:id",auth,async(req,res)=>{
    try{
        const {title,author,category,pdf,cover,audio,price,summary,description,isPaid}=req.body

        let book=await Book.findById(req.params.id)
        if(!book){
            return res.status(404).json({
                msg:"Book not found"
            })
        }
        // if(!book.addedBy || ! book.addedBy.equals(req.user)){
        //     return res.status(401).json({
        //         msg:"user not authorized"
        //     })
        // }
        //above neet edit :)
        if (title) book.title=title
        if(author) book.author=author
        if(category) book.category=category
        if(pdf) book.pdf=pdf
        if(cover) book.cover=cover
        if(audio) book.audio=audio
        if(price!==undefined) book.price=price
        if(summary) book.summary=summary
        if(description) book.description=description
        if(isPaid!==undefined) book.isPaid=isPaid

        await book.save()

        res.json(book)
    }catch(err){
        console.error(err.message)
        res.status(500).send("server error")
    }
})

//dellete/api/book
router.delete("/:id",auth,async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id)
        if(!book){
            return res.status(404).json({
                msg:"book not found"
            })
        }
        // if(!book.addedBy || book.addedBy.toString()!==req.user){
        //     return res.status(401).json({
        //         msg:"user not authorized"
        //     })
        // }
        
        await Book.findByIdAndDelete(req.params.id)

        // await Book.remove()
        res.json({
            msg:"book removed succesfully"
        })
    }catch(err){
        console.log(err.message)
        res.status(500).send("servr error")
    }
})


//post/api//buy
router.post("/buy/:id",auth,async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id)

        if(!book){
            return res.status(404).json({
                msg:"book not found"
            })
        }
        if(book.price===0){
            return res.status(400).json({
                msg:"this book is free!"
            })
        }

        if(book.isPaid){
            return res.status(400).json({
                msg:"this book is taken"
            })
        }

        book.isPaid=true
        await book.save()
        await sendEmail(
            req.user.email,
            "you got this book",
            `now you have ${book.title}`
        )

        res.json({
            msg:"you got this book successfully"
        })
    }catch(err){
        console.error(err.message)
        res.status(500).json({
            msg:"server error"
        })
    }
})


module.exports=router