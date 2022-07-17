const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res)=>{

    var today = new Date();
    var currentDay = today.getDay();
    if(currentDay === 6 || currentDay === 0){
        res.send("<h1>Heyy its Wekend</h1>");
    } else{
        res.send("<h1>Hi, Nw day New tasks</h1>");
    }
    
});

app.listen(3000, ()=>{
    console.log('server started on port 3000');
})