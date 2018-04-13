const express = require('express');
const app = express();
const path = require ('path');




app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{

    res.send("It's working");
})

app.listen(3000, ()=>{

    console.log('Listening on port 3000')
});