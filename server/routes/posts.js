const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//create a new post
router.post('/', async(req, res) =>{
    try{
        const{ title, description, category} = req.body;

        const newPost = new Post({
            title,
            description,
            category
        });

        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json({error: 'Failed to create post'});
    }
});

//get all posts
router.get('/', async(req,res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({error: 'Failed to fetchposts'});
    }
});

module.exports = router;