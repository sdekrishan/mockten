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

responses :
if User already exists then it will say "user already exist"
you have to give all fields, if you missed one of them then it will give you an error that " name is required " as such.
if you passed all the parameter then you will get "user successfully created"

### Login a user
 
 /login
 you need to pass your email and password in body for loggin (method : POST)
 
 responses :- 
 if you pass correct email but incorrect password you will get "wrong credentials"
 if you login with a email id that is not registered you will get "user not found"
 if you do everything corrected you will get "user login successfully"

## Flight section (/flights)

### Get all flights

use /flights to get all flights (method :GET)

responses : if there is no error in method or such you will get all the data as array of objects
but if you pass invalid method then you will get "data not found"

### Get a particular flight with id

use /flights/id route to get a particular flight (method : GET)

responses:- if you want to get a flight with invalid id you will get "flight not found with id"
if you pass an wrong method then you will get "something went wrong with error message"
If you do all things correctly you will get single data as object;

### post a flight (create a flight);

use /flights for creating a new flight. (method : POST) {airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price} pass them in body

responses :- if you do something wrong then you will get  "something went wrong with error message"
if you do all things correctly then you will get {{message:"flight created successfully",flight:new flight data}}

### Update a flight

use /flights/:id route to update, pass your id after flights and send the data by passing in body (method : PATCH)

responses:- if you do something wrong then you will get  "something went wrong with error message"
if you want to update some invalid flights i.e. id is not there then you will get "flight not found with id"
if you do all things correctly then you will get "flight has been updated"

### Delete a Flight

use /flights/:id route to delete any flight by their id. (method : DELETE)

responses:- if you do something wrong then you will get  "something went wrong with error message"
if you want to delete invalid flights i.e. id is not there then you will get "flight not found with id"
if you do all things correctly then you will get "flight has been deleted"

## Booking

### for booking a flight (/booking)

 /booking for book a flight. you have to pass the userId and flightId in body. Then you can book any flight (method : POST)

responses :- if you do something wrong then you will get  "something went wrong "
if you do all things correctly then you will get "book successfully


### Dashboard (/dashboard)

Here you can see all the flights who has been booked with all data related to user and flight (method : GET)

responses :- if you do something wrong then you will get  "something went wrong "
if you do all things correctly then you will get data as an array of objects


I hope you like the documentation and thank you for reading till now :)
