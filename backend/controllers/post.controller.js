const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const { content } = req.body;
        const newPost = new Post({ content });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post non trouvé' });
        post.likes++;
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

exports.commentPost = async (req, res) => {
    try {
        const { comment } = req.body;
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post non trouvé' });
        post.comments.push(comment);
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
};