import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class EditContent extends React.Component {
    state = {
        content: '',
        choice: 'Choose Category',
        description: ''
    }

    chooseCategory = (e) => {
        this.setState({
            choice: e.target.innerHTML
        })
       // console.log(e.target.innerHTML)
    }

    componentDidMount() {
        this.getContent();
    }
    fetchAll = async () => {
        const prop = this.props.match.match
        console.log(prop)
        const res = await fetch('/api/post/' + prop.params.contentId)
        const body = await res.json()
        return body
    }
    getContent = () => {
        return this.fetchAll()
            .then(result => {
                console.log(result[0])

                this.setState({
                    content: result[0],
                    choice:result[0].category,
                    description:result[0].description
                })
                //title 내용바꾸기
                document.querySelector("#title").value = result[0].title
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state)
        const dropdownItems = this.props.categories.map(category => {
            return <a className="dropdown-item" onClick={this.chooseCategory}>{category}</a>
        });
        const editUrl = "/api/post/edit/"+this.state.content._id
        return (
            <div>
                <form action={editUrl} method="post">
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

                        <input type="hidden" name="description" id="description" value={this.state.description} />
                        <input type="hidden" name="category" id="category" value={this.state.choice} />
                    </div>
                    <button type="submit" className="btn btn-primary form-control">Edit</button>
                </form>
            </div>
        );
    }
}
export default EditContent;