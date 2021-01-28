const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const apiURL = 'https://api.punkapi.com/v2/beers';
const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Checking to make sure the it's working
app.get('/', (req, res) => {
    res.json({
        message: `It's working :)`
    });
});

// GET ALL Beers
app.get('/beers', (req, res) => {
  axios.get(apiURL)
    .then(function (response) {
        res.send(JSON.stringify(response.data));
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
});

// GET Beers by name
app.get('/search/:query', (req, res) => {
  axios.get(apiURL + '?beer_name=' + req.params.query)
    .then(function (response) {
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
