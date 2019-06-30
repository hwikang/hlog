const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/post', (req, res) => {
    res.send([
        {
            'id': 1,
            'title': 'test1'
        },
        {
            'id': 2,
            'title': 'test2'
        },
        {
            'id': 2,
            'title': 'test3'
        }
    ])
});
app.listen(port, () => {
    console.log(`listening ${port}`);
});