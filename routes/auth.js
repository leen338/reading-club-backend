const express=require("express")
const router=express.Router()
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const User=require("../models/User")
const console = require("node:console")

// post / api / register
router.post("/register",async(req,res)=>{
    try{
        const {name,email,password}=req.body

        let user=await User.findOne({email})
        if(user){
            return res.status(400).json({
                msg:"User already exists"
            })
        }

        // run password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        
    //create new user
        user=new User({
            name,
            email,
            password:hashedPassword
    })

    await user.save()

    res.status(201).json({
        msg:"user registered successfully"
    })
    }catch(err){
        console.error(err.message)
        res.status(500).send("server error")
    }
})
router.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({
                msg:"invalid credentails"
            })
        }

        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({
                msg:"invalid credentails"
            })
        }
        const payload={
            user:{
                id:user.id,
                email:user.email
            }
        }
        const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"})
        res.json({token})
    }catch(err){
        console.error(err.message)
        res.status(500).send("server error")
    }

})


module.exports=router