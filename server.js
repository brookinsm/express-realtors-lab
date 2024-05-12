const express = require('express');

// Middleware will be required here
const cors = require('cors');
const logger = require('morgan');
const apartmentsRouter = require('./routes/apartments');
const housesRouter = require('./routes/houses');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(logger('dev'));

//Routes will go here
app.get('/', function(req, res) {
    res.json({msg: 'Server Running!'})
});

app.use('/apartments', apartmentsRouter);
app.use('/houses', housesRouter);

app.listen(PORT, function() {
  console.log(`Server running on ${PORT}`)
});


