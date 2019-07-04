import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
                <form action="api/post/add" method="post">
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
                                    data="<p>Hello from CKEditor 5!</p>"
                                    onInit={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                        this.setState({
                                            description: data
                                        })
                                    }}
                                    onBlur={editor => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={editor => {
                                        console.log('Focus.', editor);
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