const Blog = require('../model/blog');
const Portfolio = require('../model/portfolio')
exports.getHome = (req,res,next) =>{
    Blog.getRecentBlogs()
    .then(blogs=>{
      //  console.log(result)
        Portfolio.getRecentPortfolios()
        .then(portfolios=>{
            res.send(
                {
                    blogs : blogs,
                    portfolios:portfolios
                }
            )
        })
       
    })
    .catch(err=>console.log(err))
    
}