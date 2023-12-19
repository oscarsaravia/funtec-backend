import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import bodyParser from "body-parser";
import ReviewsRoute from './Routes/ReviewsRoute.ts'
import AppointmentRoute from './Routes/AppointmentRoute.ts'

const app = express();
app.use(cors({
    origin: '*'
}));
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));



mongoose
    .connect("mongodb+srv://sar19322:DzwK9yMhvpwdZT5P@cluster0.pd583xc.mongodb.net/?retryWrites=true&w=majority")
    .then(() => app.listen(5001, () => console.log("Server Running")))
    .catch((error) => console.log(error.message));

app.use('/review', ReviewsRoute)
app.use('/appointment', AppointmentRoute)
