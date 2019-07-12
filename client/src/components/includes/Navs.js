import React from 'react';
import 'styles/Navs.css';
import path from 'path';
import {Link} from 'react-router-dom';
class Navs extends React.Component {
    state={
        user:'',
        isLogin:false
    }
    componentDidMount(){
        this.getDetail();
    }
    getDetail = () =>{
        this.callApi()
        .then(result=>{
            console.log(result)
           if(result.isLogin){
            this.setState({
                user:result.user,
                isLogin:result.isLogin
            })
        }
        })
            .then(() => {  //embed items

            })
            .catch(err => console.log(err))

    }

    callApi = async () => {
        const res = await fetch(path.join('/api/islogin'));
        const body = await res.json();
        return body;
    }

    render() {
        return (
            <div className="Navs">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/portfolio">Portfolio </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/post">POST </Link>
                    </li>
                    {this.state.isLogin ?
                        <li className="nav-item">
                            <a className="nav-link" href="/api/logout">LogOut </a>
                        </li>
                        :
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login </Link>
                        </li>
                    }
                </ul>
            </div>
        )
    }

}

export default Navs;
