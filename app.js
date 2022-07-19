const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let tasks = [];

app.use(bodyParser.urlencoded({extended:true})); // to use the body parser
app.use(express.static('public'))

app.set('view engine', 'ejs'); //this is required from ejs to work

app.get('/', (req, res)=>{

    let currentDay = new Date().toLocaleDateString('en-us', {weekday:"long", day: 'numeric', month:'long'}); // long day to display day name
    
    res.render('list', {kindOfDay: currentDay, newListItems: tasks});
});

//to get items from the html

app.post('/', (req, res)=>{
    let task = req.body.newItem;
    tasks.push(task);
    res.redirect('/');
});



app.listen(3000, ()=>{
    console.log('server started on port 3000');
}) 