import React from 'react';
import "styles/addPortfolio.css"
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import path from 'path';
class EditPortfolio extends React.Component {

    state ={
        title:'',
        skills:[],
        description:'',
        portfolio:''
    }
    ///ajax
    componentDidMount(){
        this.getDetail();
    }
    getDetail = () =>{
        this.callApi()
        .then(result=>{
            console.log(result)
            this.setState({
                title:result[0].title,
                portfolio:result[0],
                skills:result[0].skills,
                description:result[0].description
            })
        })
        .then(()=>{  //페이지 로딩동시에 get items 
            document.querySelector('#title').value=this.state.title; //title
            this.state.skills.map(skill=>{
                this.createBtn(skill)
            });  //skill
            //youtube
            document.querySelector('#youtube').value=this.state.portfolio.youtube; 

            //git
            document.querySelector('#github').value=this.state.portfolio.github; 
            //web
            document.querySelector('#pageUrl').value=this.state.portfolio.pageUrl; 
            
            
            

        })
        .catch(err=>console.log(err))

    }
   
    callApi = async () =>{
        const id = this.props.match.params.portfolioId
        const res = await fetch(path.join('/api/portfolio/',id));
        const body = await res.json();
        return body;
    }
     //////

    addSkills = (e) =>{
        e.preventDefault();
        const input =document.querySelector('#skillInput');
        const skill = input.value
        //console.log(newState)
       
        this.setState({
            skills : this.state.skills.concat(skill)
        })
        this.createBtn(skill)
        input.value = '';
        
    }
    createBtn = (skill) =>{
        // const arr = this.state.skills;
        // arr.map(v=>{
            let button = document.createElement('button');
            button.className="btn btn-primary skillBtn";
            button.innerHTML = skill;
            button.onclick= this.removeSkill
            document.querySelector('#skills').appendChild(button);
        // })
    }
    removeSkill = (e) =>{
        
       // console.log(e.target.innerHTML);
        e.preventDefault();
        this.setState({
            skills: this.state.skills.filter(v=>{
                return v !== e.target.innerHTML
            })
        })
        this.removeBtn(e.target)
    }
    removeBtn = (target) =>{
       // console.log(target)
        document.querySelector('#skills').removeChild(target)
    }

    

    render() {
        console.log(this.state.portfolio)
        const editUrl = "/api/portfolio/edit/"+this.state.portfolio._id
        return (
            <div>
                <form action={path.join(__dirname,editUrl)} method="post">
                    <div className="container form-group" >

                        <div className="row">
                            <div className="col">
                                Title : <input type="text" className="form-control" name="title" id="title" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8">
                                <label> Skills : </label>
                                    <input type="text" className="form-control" id="skillInput"/>                                   
                            </div>
                            <div className="col-4 d-flex align-items-end">
                                   <button className="btn btn-primary" onClick={this.addSkills} >Add</button>
                                
                               
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col">
                                 <div id="skills"></div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                Youtube : <input type="text" className="form-control" name="youtube" id="youtube" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                PageUrl : <input type="text" className="form-control" name="pageUrl" id="pageUrl" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Github : <input type="text" className="form-control" name="github" id="github" />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col">
                                Description :
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={this.state.description}
                                    
                                    onChange={(event, editor) => {
                                        const data = editor.getData();                                        
                                        this.setState({
                                            description: data
                                        })
                                    }}                                    
                                />
                            </div>
                        </div>

                    </div>
                    <input type="hidden" name="description" value={this.state.description} />
                    <input type="hidden" name="skills" value={this.state.skills} />
                    
                    <button type="submit" className="btn btn-primary form-control">Add Portfolio</button>
                </form>
            </div >
        )
    }
}

export default EditPortfolio;