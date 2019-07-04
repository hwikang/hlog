import React from 'react';
import "styles/addPortfolio.css"
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import path from 'path';
class AddPortfolio extends React.Component {

    state ={
        skills:[],
        description:''
    }
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
        console.log(this.state.skills)
        return (
            <div>
                <form action={path.join(__dirname,"/api/portfolio/add")} method="post">
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
                                    data="<p>Hello from CKEditor 5!</p>"
                                    
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

export default AddPortfolio;