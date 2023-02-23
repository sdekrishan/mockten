# Api Documentation
This api contains information about flights. In this api user can register and login theirselves. They can book the flights also and they can do crud operation on flight. User can see all the details related to booked flights.

## Mock 10 Backend
We have three section in our api
1. User
2. Flight
3. Booking
4. DashBoard

## Text Stacks :- MongoDB, Express, Node Js, Mongoose and cylic for deployment

Use this link https://determined-smock-crow.cyclic.app

## For User (/)

This api allows us to register and login 
If you want to register then :- 

### Register a user
 /register
you need to give your name,email and password for register. (method : POST)

### Login a user
 
 /login
 you need to pass your email and password in body for loggin (method : POST)

## Flight section (/flights)

### Get all flights

use /flights to get all flights (method :GET)

### Get a particular flight with id

use /flights/id route to get a particular flight (method : GET)

### post a flight (create a flight);

use /flights for creating a new flight. (method : POST)

### Update a flight

use /flights/:id route to update, pass your id after flights and send the data by passing in body (method : PATCH)

### Delete a Flight

use /flights/:id route to delete any flight by their id. (method : DELETE)

## Booking

### for booking a flight (/booking)

 /booking for book a flight. you have to pass the userId and flightId in body. Then you can book any flight (method : POST)

### Dashboard (/dashboard)

Here you can see all the flights who has been booked with all data related to user and flight (method : GET)

I hope you like the documentation and thank you for reading till now :)
