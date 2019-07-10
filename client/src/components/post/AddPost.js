import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import path from 'path';
class AddPost extends React.Component {
    state = {
        choice: 'Choose Category',
        description: ''
    }
    chooseCategory = (e) => {
        this.setState({
            choice: e.target.innerHTML
        })
        console.log(e.target.innerHTML)
    }
    render() {
        console.log(this.props)
        const dropdownItems = this.props.categories.map(category => {
            return <a className="dropdown-item" onClick={this.chooseCategory}>{category}</a>
        });

        return (
            <div>
                <form action={path.join(__dirname,"api/post/add")} method="post">
                    <div className="container form-group" >

                        <div className="row">
                            <div className="col">
                                Title : <input type="text" className="form-control" name="title" id="title" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label> Category : </label>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                        {this.state.choice}
                                    </button>
                                    <div className="dropdown-menu">
                                        {dropdownItems}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">


                                Description :
                                <CKEditor
                                    editor={ClassicEditor}
                                    data=""
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        
                                        this.setState({
                                            description: data
                                        })
                                    }}
                                />
                            </div>
                        </div>

                        <input type="hidden" name="description" id="description" value={this.state.description} />

                        <input type="hidden" name="category" id="category" value={this.state.choice} />
                    </div>
                    <button type="submit" className="btn btn-primary form-control">Add</button>
                </form>
            </div >
        )
    }
}

export default AddPost;