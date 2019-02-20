const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');

const app = express();
app.use(express.static(path.join(--__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'));

const groceriesRoutes = require('./routes/groceries');

app.use('/groceries', groceriesRoutes);

let db;

MongoClient.connect('mongodb://sandbox:sandbox1@ds217864.mlab.com.178864/grocerylist', (err, database) => {
    if (err) return console.log(err)
    db = database.db('')
    app.listen(3000, function () {
        console.log('Listening on port 3000')
    })
})