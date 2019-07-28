import React from 'react';
import 'styles/Navs.css';
import path from 'path';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {login} from '../../actions/login';

class Navs extends React.Component {

    componentDidMount(){
        this.getDetail();
    }
    getDetail = () =>{
        this.callApi()
        .then(result=>{
           // console.log(result)
           if(result.isLogin){
               //action creator
               this.props.login(result.user);
            }
        })
        .then(() => {  //embed items

        })
        .catch(err => console.log(err))

    }

    callApi = async () => { //세션값 불러오는 api 
        const res = await fetch(path.join('/api/islogin'));
        const body = await res.json();
        return body;
    }

    render() {
        return (
            <div>
                <div className="Navs bg-dark">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/portfolio">Portfolio </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/post">POST </Link>
                        </li>
                        {this.props.isLogin?
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/api/logout">LogOut </a>
                            </li>
                        :    
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/login">Login </Link>
                            </li>
                        }
                    </ul>
                </div>
                <hr/>
            </div>
        )
    }

}
const mapStateToProps = (state) =>{
    //console.log(state);
    return {isLogin:state.isLogin};

}
export default connect(mapStateToProps,{login})(Navs);
