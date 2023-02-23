const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	 flight : { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' }
})

const BookingModel = mongoose.model("booking",bookingSchema)
module.exports = {BookingModel}

