import React, { useState } from "react";


export function LoginView(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>

                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control"
                                           placeholder="Email address" required autoFocus value={email}
                                           onChange={e => setEmail(e.target.value)}/>
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Password" required value={password}
                                           onChange={e => setPassword(e.target.value)}/>
                                    <label htmlFor="inputPassword">Password</label>
                                </div>


                                <button onClick={props.handleLoginSubmit}
                                        className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"
                                        disabled={!validateForm()}>
                                    {props.isUserLoggedIn ? "Log Out" : "Sign In"}
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}