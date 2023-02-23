const express = require("express");
const { connection } = require("./Config/db");
require("dotenv").config();
const cors = require("cors");
const { userRouter} = require("./Routes/UserRouter");
const { flightRouter } = require("./Routes/FlightRouter");
const { bookingRouter } = require("./Routes/BookingRouter");
const { BookingModel } = require("./Models/BookingModel");
const { UserModel } = require("./Models/UserModel");
const app = express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.use("/",userRouter);

app.use("/flights",flightRouter)
app.use("/booking",bookingRouter);

app.get("/dashboard",async(req,res)=>{
    try {
        const data = await BookingModel.find().populate(["user","flight"]);
        res.status(201).send(data)
    } catch (error) {
        res.status(400).send("something went wrong")
    }
})
app.listen(process.env.PORT,async()=>{    
    try {
        await connection;
        console.log(`server has been started on ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
})