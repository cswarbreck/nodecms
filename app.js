const express = require('express');
const app = express();
const path = require ('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/cms').then(db =>{

    console.log('Connected to MongoDB');

}).catch(error=> console.log(error));

app.use(express.static(path.join(__dirname, 'public')));

// Set View Engine

app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

// Body Parser

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// Load Routes

const home = require('./routes/home/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts');


// Use Routes

app.use('/', home);
app.use('/admin', admin);
app.use('/admin/posts', posts);





const port = 3000 || process.env.PORT;

app.listen(port, ()=>{

    console.log(`listening on ${port}`);
});