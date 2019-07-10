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

exports.getPortfolio = (req,res,next) =>{
    const portfolioId = req.params.portfolioId
    

    Portfolio.getPortfolioById(portfolioId)
    .then(result=>{
        res.send(result);
    })
    .catch(err=>console.log(err));
}

exports.editPortfolio = (req,res,next) =>{
    const id = req.params.portfolioId;
    const title = req.body.title;
    const skills = req.body.skills.split(',') //string 을 배열로바꿈

    const youtube = req.body.youtube;
    const pageUrl = req.body.pageUrl;
    const github = req.body.github;
    const description = req.body.description;
    Portfolio.editPortfolio(id,title,skills,youtube,pageUrl,github,description)
    .then(
        res.redirect('/portfolio')
    )
    .catch(err=>console.log(err));  
}

exports.deletePortfolio = (req,res,next) =>{
    const id = req.params.portfolioId;
    Portfolio.deletePortfolio(id)
    .then(result=>{
        console.log(result);
        res.redirect('/portfolio');
    })
    .catch(err=>console.log(err));
}