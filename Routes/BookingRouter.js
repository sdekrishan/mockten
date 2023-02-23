const express = require("express");
const { BookingModel } = require("../Models/BookingModel");
const bookingRouter = express.Router();

bookingRouter.post("/",async(req,res)=>{
    const {user,flight} = req.body;
    try {
        const booking = new BookingModel({user,flight});
        await booking.save()
        res.status(201).send("book successfully")
    } catch (error) {
        res.status(400).send("something went wrong")
    }
})

module.exports = {bookingRouter}