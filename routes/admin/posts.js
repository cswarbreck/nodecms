const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');



router.all('/*', (req, res, next)=>{

    req.app.locals.layout = 'admin';
    next();
});

router.get('/', (req, res)=>{

    res.render('admin/posts');
});

router.get('/create', (req, res)=>{

    res.render('admin/posts/create');
});

router.get('/create', (req, res)=>{

    let allowComments = true;

    if(req.body.allowComments){

        allowComments = true;
    }else{

        allowComments = false;
    };

    const newPost = new Post({

        title: req.body.title,
        status: req.body.status,
        allowComments: allowComments,
        body: req.body.body
    });

    newPost.save().then(savedPost =>{

        console.log(savedPost);

        res.redirect('/admin/posts');
    }).catch(error =>{

        console.log('Could not save post');
    });

   // console.log(req.body.allowComments);
});


module.exports = router;