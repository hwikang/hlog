import React from 'react';
import GetPost from './post/GetPost';
import AddPost from './post/AddPost';
class Post extends React.Component {
    state = {
        categories: ['JS', 'React.js', 'Node.js', 'CS', '일상'],
        page: 'get',
        contentId : ''
    }
    addPage = () => {
        //console.log("this=", this)
        this.setState({
            page: 'add'
        });
    };
    viewPage = (id) =>{
        this.setState({
            page: 'view',
            contentId : id
        });
    }
    render() {
        
        if (this.state.page === 'get') {
            return (
                <div>
                    <GetPost
                     categories={this.state.categories}
                      addPage={this.addPage}
                     viewPage={this.viewPage}
                    />
                </div>
            )
        } else if (this.state.page === 'add') {
            return (
                <div>
                    <AddPost categories={this.state.categories} />
                </div>
            )
        }
    }
}

export default Post;