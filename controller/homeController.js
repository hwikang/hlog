const Blog = require('../model/blog');

exports.getHome = (req,res,next) =>{
    Blog.getRecentBlogs()
    .then(result=>{
      //  console.log(result)
        res.send(
            {
                blogs : result
            }
        )
    })
    .catch(err=>console.log(err))
    
}