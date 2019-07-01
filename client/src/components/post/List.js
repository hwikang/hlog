import React from 'react';
import Content from './Content';

class List extends React.Component{

    render(){
        const contents = [1,2,3,4,5,6];
        const contentList = contents.map((content,index)=>{
            return <Content key={index}/>
        })
        return (  
            <div>
                <a className="btn btn-primary" href="/post/add-post">Add new post </a>
                {contentList}
            </div>
        )
    }
}

export default List;
