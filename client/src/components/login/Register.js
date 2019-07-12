import React from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <div className="justify-content-center">
            <form action="/api/login/register" method="post">
                <div className="row">
                    <div className="col input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">ID</span>
                        </div>
                        <input type="text" className="form-control" name="id" id="id" />
                    </div>

                </div>
                <div className="row">
                    <div className="col input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Password</span>
                        </div>
                        <input type="text" className="form-control" name="password" id="password" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary form-control">Register</button>
            </form>
            
        </div>

    )
}

export default Login;