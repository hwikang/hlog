import React from 'react';
import GetPost from './post/GetPost';
import AddPost from './post/AddPost';

import {BrowserRouter , Route } from 'react-router-dom';
class Post extends React.Component {
    state ={
        categories : ['JS','React.js','Node.js','CS','일상']
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact={true} path="/post" component={GetPost} />
                </BrowserRouter>
                <BrowserRouter>
                    <Route path="/post/add-post" component={AddPost} />
                </BrowserRouter>
               
               
                
            </div>
        )
    }
}

export default Post;