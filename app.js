const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoConnect = require('./utils/db').mongoConnect;
const session = require('express-session')
const mongoDBStore = require('connect-mongodb-session')(session)
const blogRoutes = require('./routes/blog');
const homeRoutes = require('./routes/home');
const portfolioRoutes = require('./routes/portfolio');
const loginRoutes = require('./routes/login');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
} 

const store = new mongoDBStore({
    uri:'mongodb+srv://khdrogba:0qDrcUzZoypi8FGm@hlog-cluster-tkqwg.mongodb.net/hlog?retryWrites=true&w=majority',
    collection:'session'
})
app.use(session({
    secret:'hwi secret',
    resave:false,
    saveUninitialized:false,
    store:store
}))
app.use(blogRoutes);
app.use(homeRoutes);
app.use(portfolioRoutes);
app.use(loginRoutes);

mongoConnect(() => {
    app.listen(PORT, () => {
        console.log(`listening ${PORT}`);
    });
    //console.log(client)
})
