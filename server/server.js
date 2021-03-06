const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const requireDir = require('require-dir')

const app = express();

// Bodyparser and app config
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"))

// Creating models
requireDir('./src/models');

// MongoDB config
mongoose
    .connect(
        process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("Successfully conected to MongoDB"))
    .catch(err => console.log(err));

// Routes
app.use('/api', require('./src/routes'));

// Start
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server opened on port ${port}`));