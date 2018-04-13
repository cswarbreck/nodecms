const express = require('express');
const app = express();
const path = require ('path');
const exphbs = require('express-handlebars');




app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({defaultLayout: 'home'}) );
app.set('view engine', 'handlebars');

app.get('/', (req, res)=>{

    res.render('home/index');
});

app.get('/about', (req, res)=>{

    res.render('about/index');
});

app.listen(3000, ()=>{

    console.log('Listening on port 3000')
});