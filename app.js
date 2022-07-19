const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let tasks = [];
let workList = [];

app.use(bodyParser.urlencoded({extended:true})); // to use the body parser
app.use(express.static('public'))

app.set('view engine', 'ejs'); //this is required from ejs to work

app.get('/', (req, res)=>{

    let currentDay = new Date().toLocaleDateString('en-us', {weekday:"long", day: 'numeric', month:'long'}); // long day to display day name
    
    res.render('list', {ListTitle: currentDay, newListItems: tasks});
});


app.get('/work', (req,res) =>{
    res.render('list', {ListTitle: 'work List', newListItems: workList});
});
//to get items from the html

app.post('/', (req, res)=>{
    let task = req.body.newItem;
    if (req.body.list === 'work'){
        workList.push(task);
        res.redirect('/work')
    } else{
        tasks.push(task);
        res.redirect('/');
    }
});


app.post('/work', (req, res)=>{
    let item = req.body.newItem;
    workList.push(item);
    res.redirect('/work')
})


app.listen(3000, ()=>{
    console.log('server started on port 3000');
}) 