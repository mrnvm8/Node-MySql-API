//Import Files
const express = require('express');
const apiRouter = require('./routes');
const port = "3000";

//Create an App
const app = express();

//This app body will be converted into JSON format
app.use(express.json());

//Routing path will use when sending requests
app.use('/api/Student', apiRouter);

//Listen on a port that the application will be running at
app.listen(port,() => {
    console.log(`Serving is running aon port ${port}`)
});

