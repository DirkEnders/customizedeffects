import React from 'react';

export function NavBar(props) {



    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="/">FINALE 3D</a>

                <ul className="navbar-nav mr-auto">
                    <li className={props.isUserLoggedIn ? "nav-item active" : "nav-item"}>
                        <a className={props.isUserLoggedIn ? "nav-link" : "nav-link disabled"} href="/add">Add Effects</a>
                    </li>
                    <li className={props.isUserLoggedIn ? "nav-item active" : "nav-item"}>
                        <a className={props.isUserLoggedIn ? "nav-link" : "nav-link disabled"} href="/userstatus">Effect
                            Status</a>
                    </li>
                    <li className={props.isUserLoggedIn ? "nav-item active" : "nav-item"}>
                        <a className={props.isUserLoggedIn ? "nav-link" : "nav-link disabled"} href="/admin">Admin
                            Effects(Admin)</a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <form className="form-inline" action="/login">
                        <button className="btn btn-success"
                                type="submit">{props.isUserLoggedIn ? "Logout" : "Login"}</button>
                    </form>
                </ul>



            </nav>
            <div>
                <span>&nbsp;</span>
            </div>


        </div>
    );
}
