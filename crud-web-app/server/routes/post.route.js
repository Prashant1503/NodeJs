const router = require('express').Router();
const {Post} = require('../model/Post.model');


// for creating new post
router.post('/create',(req,res) => {

    const post = new Post(req.body);

    try {
        post.save((err) => {
            if(err) return res.status(400).json({success : false, error : err});
            return res.status(200).json({success : true,message : 'Post added success'});
        })
        .catch((error) => {
            console.log('error ' + error);
        });

    }
    catch(e) {
        console.log('Something went wrong');
    }
});

// for getting all post from db

router.get('/posts',(req,res) => {

    try {
        Post.find().exec((err,posts) => {
            if(err) return res.status(500).json({success : false,error : err});
            return res.status(200).json({success : true,post : posts});
        });

    }
    catch(e) {
        console.log('Something went wrong!');

    }
});

// for getting post by id
router.get('/detail/:id',(req,res) => {

    let id = req.params.id;

    Post.findById(id,function(err,post) {
        if(err) return res.status(400).json({success : false,err : err});
        return res.status(200).json({success : true,post : post});
    });
});

// for updating existing post

router.put('/update/:id',(req,res) => {
    
    try {
        Post.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },
        (err,post) => {
            if(err) return res.status(400).json({success : false,error : err});
            return res.status(200).json({success : true,updatedPost : post});

        });

    }
    catch (e) {
        console.log('Something went wrong on update!');

    }
});

// for deleting existing post by id

router.delete('/delete/:id',(req,res) => {

    try {

        Post.findByIdAndRemove(req.params.id).exec((err,deleteItem) =>{
            if(err) {
                return res.status(400).json({success : false,error : err});
            } return res.status(200).json({success : true,posts : deleteItem});
        });
    }
    catch(e) {
        console.log('Something went wrong while deleting item!');

    }
});

module.exports = router;