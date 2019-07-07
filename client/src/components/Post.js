import React from 'react';
import GetList from './post/GetList';
import Category from './post/Category';
import {Link} from 'react-router-dom';
class Post extends React.Component {
    
    render() {        
        return (
            <div>
                <div>
                    <Category categories={this.props.categories}/>
                </div>
                <div>
                    <Link to="/post/add" ><button type="button" className="btn btn-primary">Add new post </button></Link>
                </div>
                <div>
                    <GetList
                        categories={this.props.categories}
                       
                    />
                </div>
            </div>
        )
    }
}

export default Post;