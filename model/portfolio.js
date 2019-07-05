const getDb = require('../utils/db').getDb;
const mongodb = require('mongodb');
class Portfolio{
    constructor(title,skills,youtube,pageUrl,github,description){
        this.title = title;
        this.skills = skills;
        this.youtube = youtube;
        this.pageUrl = pageUrl;
        this.github = github;
        this.description = description;
        this.addDate = new Date();
    }

    addPortfolio=()=>{
        const db = getDb();
       // console.log(db);
        return db.collection('portfolio').insertOne(this)
        .then(result=>{
            console.log(result);
        })
        .catch(err=>console.log(err))
    }

    static getPortfolios = () =>{
        const db = getDb();
        return db.collection('portfolio').find().toArray()
        .then(result=>{
            return result;
        })
        .catch(err=>console.log(err));
    }

    static getPortfolioById = (id) =>{
        const db = getDb();
        console.log(id)
        return db.collection('portfolio').find({_id: new mongodb.ObjectId(id)}).toArray()
        .then(result=>{
            console.log(result);
            return result;
        })
        .catch(err=>console.log(err));
    }

    static getRecentPortfolios = () =>{
        return this.getPortfolios()
        .then(portfolios=>{
            portfolios.sort(()=>{
                return -1;
            })
            const recentPortfolios = [portfolios[0],portfolios[1],portfolios[2]]
            return recentPortfolios
        })
        .catch(err=>console.log(err))
    }

}

module.exports =Portfolio;