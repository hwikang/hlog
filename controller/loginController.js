const User = require('../model/user');
exports.register = (req, res, next) => {
    const id = req.body.id
    const password = req.body.password;

    const user = new User(id, password);
    user.save()
        .then(result => {
            //console.log(result);
            res.redirect('/login');
        })
        .catch(err => console.log(err));

}

exports.login = (req, res, next) => {

    const id = req.body.id;
    const password = req.body.password;
   // console.log(id, "", password)
    User.login(id, password)
        .then(user => {
            console.log(user)
            if (user) {
                req.session.isLogin = true;
                req.session.user = user;

                res.redirect('/');
            } else {
                console.log('login failed');
                res.redirect('/login')
            }


        })
        .catch(err => {
            console.log(err)

        })
}

exports.logout = (req,res,next) =>{
    req.session.destroy()
    res.redirect('/')
}