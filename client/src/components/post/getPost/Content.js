import React from 'react';
import 'styles/content.css';
import moment from 'moment'
const Content = ({ content }) => {
    console.log(content)
    const fromNow = () =>{
        const postdate = moment(content.postdate)
        return postdate.fromNow();
    }
   
    return (
        <div className="content card">
            <div className="card-header">
                <h5>{content.category}</h5>
            </div>
            <div className="card-body">
                <h4 className="card-title">{content.title} </h4>
                <h6 className="card-subtitle text-muted">{fromNow()} </h6>
               <p className="card-text">{content.description} </p>
            </div>
            
          
            

        </div>
    )
}

export default Content;
