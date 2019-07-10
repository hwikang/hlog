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
exports.editContent = (req,res,next) =>{
    const contentId =  req.params.contentId;
    const title = req.body.title;
    const category = req.body.category;
    const description = req.body.description;
    console.log(contentId,title)
   
    Blog.editBlog(contentId,title,category,description)
    .then(result=>{
        console.log(result); 
        res.redirect('/post');   
    })
    .catch(err=>console.log(err))
}
exports.deleteContent = (req,res,next)=>{
    const id = req.params.contentId
    Blog.deleteBlog(id)
    .then(result=>{
        console.log(result);
        res.redirect('/post')
    })
    .catch(err=>console.log(err));
}