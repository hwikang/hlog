import React from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <div className="justify-content-center">
            <form action="/api/login" method="post">
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
                <button type="submit" className="btn btn-primary form-control">Login</button>
            </form>
            <hr/>
            <div className="row justify-content-center">
                    <div className="">
                        <h4> Are you new? </h4>                       
                    </div>
                </div>
                <div className="row justify-content-center">
                <Link to="/login/register">
                    <div className="col">
                       
                            <button type="button" className="btn btn-warning form-control" >R e g i s t e r</button>
                        
                    </div>
                    </Link>
                </div>
        </div>

    )
}

export default Login;