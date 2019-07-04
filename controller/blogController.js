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
exports.getContent = (req,res,next) =>{
    const contentId =  req.params.contentId;
     console.log(contentId);
     Blog.findById(contentId).
     then(result=>{
         res.send(result)
     })
     .catch(err=>console.log(err))
}