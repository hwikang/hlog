import React from 'react';
import Post from './Post'
class PostComponent extends React.Component {
    state = {
        post: ""
    }
    render() {
       const arr= [1,2,3];
       const postList = arr.map((post,i)=>{
            return (    
                <div className="row" key={i}>
                    <Post/>
                </div>                
            )
       });
        return (
            <div>
               {postList}
            </div>
            
        )
    }
}

export default PostComponent;