const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const mongoose = require('mongoose');
const port = 8000;   
const bodyparser = require("body-parser");


main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect('mongodb://localhost:8000/contactGym', { useNewUrlParser: true, useUnifiedTopology: true });  
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}  

const contactschema = new mongoose.Schema({ 
    name: String,
    phone: String,
    address: String,
    Email: String,

});

const contact = mongoose.model('contact', contactschema);   

app.use('/static', express.static('static'))
app.use(express.urlencoded()) 

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params)
})
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params)
})

app.post('/contact', (req, res) => {
    var myData = new contact(req.body);  
    myData.save().then(() => {
        res.send("this item has been saved to the db");
    }).catch(() => {
        res.status(404).send("item was not saved try again"); 
    })
    // res.status(200).render('contact.pug', params) 
})

app.listen(port, () => {
    console.log(`the application started succesfully on port ${port}`); 
})   