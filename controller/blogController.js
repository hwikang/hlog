const Blog = require('../model/blog');
exports.addBlog = (req, res, next) => {
    const blog = new Blog(
        req.body.title,
        req.body.category,
        req.body.description
    )
    blog.save();
    res.redirect('/post')
}
exports.getBlog = (req, res, next) => {

    Blog.fetchAll()
        .then(result => {
            //console.log(result);
            res.send({ "blogs": result })
        })


}