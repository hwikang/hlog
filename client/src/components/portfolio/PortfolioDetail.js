import React from 'react';
import path from 'path';
import {Link} from 'react-router-dom';
import 'styles/portfolioDetail.css';
class PortfolioDetail extends React.Component{
    state={
        portfolio : ''
    }
    componentDidMount(){
        this.getDetail();
    }
    getDetail = () =>{
        this.callApi()
        .then(result=>{
            this.setState({
                portfolio:result[0]
            })
        })
        .then(()=>{  //embed items
            this.createDes();
            this.embedUrl();
        })
        .catch(err=>console.log(err))

    }
    
    callApi = async () =>{
        const id = this.props.match.params.portfolioId
        const res = await fetch(path.join('/api/portfolio/',id));
        const body = await res.json();
        return body;
    }
    
    createDes = () =>{  //description : string to HTML
        const div = document.createElement('div');
        console.log(this.state.portfolio.description)
        div.innerHTML= this.state.portfolio.description;
        document.querySelector('#description').appendChild(div);
    }
    embedUrl = () =>{ //url 존재하면 집어넣기
        if(this.state.portfolio.youtube.includes('https://')){
            
            const src = this.state.portfolio.youtube;
            console.log(src)
            const youtube = document.querySelector('#youtube');
            youtube.innerHTML = src
            //`<iframe width="400" height="300" className="embed-responsive-item" src=${src} ></iframe>`          

        }
        if(this.state.portfolio.github.includes('https://')){
            let github = document.querySelector('#github');
            github.innerHTML = `<a href=${this.state.portfolio.github}>GitHub</a>`
        }   
        if(this.state.portfolio.pageUrl.includes('https://')){
            let pageUrl = document.querySelector('#pageUrl')
            pageUrl.innerHTML=`<a href=${this.state.portfolio.pageUrl}>WEB</a>`
        }
        
    }

    
    render(){
        if(this.state.portfolio){
            const skills = this.state.portfolio.skills.map(skill=>{
                return <button type="button" className="btn btn-warning skills">{skill}</button>
            })
            const editLink = "/portfolio/edit/" + this.state.portfolio._id;
            const deleteLink = "/api/portfolio/delete/" + this.state.portfolio._id;
            
            return (
                <div>
                    <div className="row justify-content-center embed-responsive embed-responsive-16by9" id="youtube">
                        
                    </div>
    
                    <div className="row justify-content-center">
                        <h1>{this.state.portfolio.title}</h1>
                    </div>
                    <div className="row justify-content-center">
                        <h1>{skills}</h1>
                    </div>
                    <div className="row justify-content-center" id="github">
                        
                    </div>
                    <div className="row justify-content-center" id="pageUrl">
                        
                    </div>
                    <div className="row justify-content-center">
                        <div id="description">
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div>
                            <Link to={editLink}>
                                <button type="button" className="btn btn-warning">Edit</button>
                            </Link>
                            {/* get 리퀘스트를 보내야해서 a태그 */}
                            <a href={deleteLink}>
                                <button type="button" className="btn btn-warning">Delete</button>
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return <div>no data from portfolioDetail</div>
        }
        
    }
}

export default PortfolioDetail;