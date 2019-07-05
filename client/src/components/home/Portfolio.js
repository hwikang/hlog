import React from 'react';
import 'styles/portfolio.css';
import path from 'path';
import {Link} from 'react-router-dom';
const Portfolio = ({portfolio})=>{
    const skills = portfolio.skills.map((skill,i)=>{
        //console.log(skill)
        return <button type="button" className="btn btn-outline-warning" key={i}>{skill}</button>
    })
    return (
        <div className="col-sm portfolio">
            <div className="jumbotron overflow-hidden">
            <h1 className="display-4">{portfolio.title}</h1>
            <div className="skills">{skills}</div>
            <hr/>
            <p className="lead">{portfolio.description}</p>
            <Link to={path.join("/portfolio/",portfolio._id)}>
                <button className="btn btn-primary">Get more Detail</button>
            </Link>
        </div>
        </div>
    )
}

export default Portfolio;