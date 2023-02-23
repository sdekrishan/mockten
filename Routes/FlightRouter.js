const express = require("express");
const { FlightModel } = require("../Models/FlightModel");
const flightRouter = express.Router();


flightRouter.get("/",async(req,res)=>{
    try {
        const flights = await FlightModel.find();
        res.status(200).send(flights)
    } catch (error) {
        res.status(404).send("Data not found")
    }
})

flightRouter.post("/",async(req,res)=>{
    const {airline,flightNo, departure,arrival,departureTime,arrivalTime,seats,price} = req.body;
    try {
        const flight = new FlightModel({airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price});
        await flight.save()
        res.status(201).send({message:"flight created successfully",flight})
    } catch (error) {
        res.status(404).send({message:"Something went wrong",error:error.message});
        console.log(error.message);
    }
})

flightRouter.get("/:id",async(req,res)=>{
    const {id} = req.params;
    try {
        const flight = await FlightModel.findOne({_id:id});
        if(flight){
            res.status(200).send(flight)
        }
        else{
            res.status(404).send(`Flight not found with ${id}`)
        }
    } catch (error) {
        res.status(404).send({message:"Something went wrong",error:error.message})
    }
})

flightRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params;
    const payload = req.body
    try {
        const check = await FlightModel.findOne({_id:id});
        if(check){
            await FlightModel.findByIdAndUpdate({_id:id},payload);
            res.status(200).send("flight has been updated")
        }
        else{
            res.status(404).send(`Flight not found with ${id}`)
        }
    } catch (error) {
        res.status(404).send({message:"Something went wrong",error:error.message})
    }
})

flightRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params;
    try {
        const check = await FlightModel.findOne({_id:id});
        if(check){
           await FlightModel.findByIdAndDelete({_id:id});
            res.status(200).send({message:"flight has been deleted"})
        }
        else{
            res.status(404).send(`Flight not found with ${id}`)
        }
    } catch (error) {
        res.status(404).send({message:"Something went wrong",error:error.message})
    }
})
module.exports = {flightRouter}