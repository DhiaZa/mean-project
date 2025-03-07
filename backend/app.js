const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/mini-social', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connecté')).catch(err => console.error(err));

app.use(cors());
app.use(bodyParser.json());

const postRoutes = require('./routes/post.routes');
app.use('/api/posts', postRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
