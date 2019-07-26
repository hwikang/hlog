import React from 'react';
import 'styles/content.css';
import moment from 'moment';
const Content = ({ content }) => {
   // console.log(content)
    const fromNow = () =>{
        const postdate = moment(content.postdate)
        return postdate.fromNow();
    }

    //description
    let div = document.createElement('div');
    div.innerHTML = content.description;
    let description = div.textContent;

  
    return (
        <div className="content card bg-dark overflow-hidden w-100">
            <div className="card-header">
                <h5 className="text-white">{content.category}</h5>
            </div>
            <div className="card-body">
                <h4 className="card-title text-white">{content.title} </h4>
                <h6 className="card-subtitle text-muted">{fromNow()} </h6>
               <p className="card-text text-white">{description} </p>
            </div>
            
          
            

        </div>
    )
}

export default Content;
