const Portfolio = require('../model/portfolio');

exports.addPortfolio = (req,res,next)=>{
    //res.send(req.body)
    const skills = req.body.skills.split(',') //string 을 배열로바꿈
    const portfolio = new Portfolio(
        req.body.title,
        skills,
        req.body.youtube,
        req.body.pageUrl,
        req.body.github,
        req.body.description
    );
    
    portfolio.addPortfolio();
    res.redirect('/portfolio');
}

exports.getPortfolios = (req,res,next)=>{
    Portfolio.getPortfolios()
    .then(result=>{
        res.send({portfolio:result});
    })
    .catch(err=>console.log(err));
    
}