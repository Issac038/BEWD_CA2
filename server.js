const express = require("express")
const app = express()
const PORT = 3000

users = [
    username = {type:String,required:true},
    email = {type:String,required:true},
    password = {type:String,required:true},
    dob = {required:true}
]

app.use(express.json())

app.get("/users",(req,res)=>{
    const user = users.find(u=>u.email == req.query.email )
    res.json(user?{message:"User found",user}:{error:"No user found"})
})

app.post("/signup",(req,res)=>{
    let {username,email,password,dob} = req.body
    if(username ==  ""){
        return res.json({message:"Username cannot be empty"})
    }
    else if(email == ""){
        return res.json({message:"email cannot be empty"})
    }
    else if(password.length>16 || password.length<8){
        return res.json({message:"Password length should be greater than 8 or less than 16"})
    }
    else{
    user = {username,email,password,dob}
    users.push(user)
    res.json({message:"Created new user",user})
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})