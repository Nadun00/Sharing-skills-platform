const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//create a new post
router.post('/', async(req, res) =>{
    try{
        const{ title, description, category} = req.body;

        const newPost = new Post({
            title,
            description;
            category
        });
    }
})