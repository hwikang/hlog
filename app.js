const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const postRoutes =require('./routes/post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(postRoutes);
app.listen(port, () => {
    console.log(`listening ${port}`);
});