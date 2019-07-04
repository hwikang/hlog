const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mongoConnect = require('./utils/db').mongoConnect;
const blogRoutes = require('./routes/blog');
const homeRoutes = require('./routes/home');
const portfolioRoutes = require('./routes/portfolio');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(blogRoutes);
app.use(homeRoutes);
app.use(portfolioRoutes);

mongoConnect(() => {
    app.listen(port, () => {
        console.log(`listening ${port}`);
    });
    //console.log(client)
})
