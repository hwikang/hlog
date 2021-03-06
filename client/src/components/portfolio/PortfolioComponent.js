//one portfolios

import React from 'react';
import {Link} from 'react-router-dom';
import path from 'path';
import 'styles/portfolioComponent.css';
const PortfolioComponent = ({portfolio}) =>{
    const skills = portfolio.skills.map((skill,i)=>{
       // console.log(skill)
        return <button type="button" className="btn btn-outline-warning" key={i}>{skill}</button>
    })
    //string to html -> get innerText
    const data = portfolio.description
    const htmlDiv = document.createElement('div');
    htmlDiv.innerHTML=data;
    const description= htmlDiv.textContent; //text만 뺴옴
    
    return(
        <div className="jumbotron overflow-hidden bg-dark">
            <h1 className="display-4 text-white">{portfolio.title}</h1>
            <div className="skills">{skills}</div>
            <hr/>
            <div>
              <p className="lead text-white">{description}</p>
            </div>
            <Link to={path.join("/portfolio/",portfolio._id)}>
                <button className="btn btn-primary">Get more Detail</button>
            </Link>
        </div>
    )
}

export default PortfolioComponent;