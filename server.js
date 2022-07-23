require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


//express app
const app = express();

//you register a middleware using the use method
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
//routes
app.use('/api/workouts', workoutRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    //listen for requests after connection
    app.listen(process.env.PORT, () => {
        console.log(`Connected to DB & Listening on port...`, process.env.PORT);
    })
    })
    .catch((error) => {
        console.log(error);
    })

