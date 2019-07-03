import React from 'react';
import GetPost from './post/GetPost';
import AddPost from './post/AddPost';

import { BrowserRouter, Route } from 'react-router-dom';
class Post extends React.Component {
    state = {
        categories: ['JS', 'React.js', 'Node.js', 'CS', '일상'],
        page: 'add'
    }
    changePage = () => {
        console.log("this=", this)
        this.setState({
            page: 'add'
        });
    };

    render() {
        if (this.state.page === 'get') {
            return (
                <div>
                    <GetPost categories={this.state.categories} changePage={this.changePage} />
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