require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const AuthRoute = require('./routes/authRoute')

// Setting port 
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Setting up MongoDB connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log("Database connected successfully!!!");
});

app.get('/api', (req, res) => {
    res.json({message: "Welcome to Enlume!"});
});

app.use('/', AuthRoute)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})