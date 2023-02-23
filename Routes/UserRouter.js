const express = require("express");
const { UserModel } = require("../Models/UserModel");
const userRouter = express.Router();

userRouter.post("/register",async(req,res)=>{
    const {name, email, password} = req.body;
    try {
        const check = await UserModel.findOne({email});
        if(check){
            res.status(400).send('User already exists');
        }
        else{
            const user = new UserModel({name,email,password});
            await user.save();
            res.status(201).send("User created successfully")
        }
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error);
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try {
        const check = await UserModel.findOne({email});
        if(check){
            if(check.email === email && check.password === password){
                res.status(201).send('user Login successfully')
            }
            else{
                res.status(404).send("wrong credentials")
            }
        }
        else{
            res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error);
    }
})
module.exports = {userRouter}