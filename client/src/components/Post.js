import React from 'react';
import GetList from './post/GetList';
import Category from './post/Category';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Post extends React.Component {
    
    render() {  
        let isAdmin = false
        if (this.props.isLogin) {
            if (this.props.isLogin.user.isAdmin) {
                isAdmin = true;
            }
        }
        return (
            <div>
                <div>
                    <Category/>
                </div>
                {isAdmin?                 
                <div>
                    <Link to="/post/add" ><button type="button" className="btn btn-primary">Add new post </button></Link>
                </div>
                :''}
                <div>
                    <GetList />
                </div>
            </div>
        )
    }
}
const mapStatetoProps =(state) =>{
    return {isLogin:state.isLogin}
}
export default connect(mapStatetoProps)(Post);