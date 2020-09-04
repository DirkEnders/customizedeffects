import React from 'react';

export function NavBar () {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="/">FINALE 3D</a>

                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/add">Add Effects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/todo">Effect Status</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/todo">Admin Effects(Admi)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/disabled">Disabled</a>
                    </li>
                    <form className="form-inline" action="/login">
                        <button className="btn btn-success" type="submit">Login</button>
                    </form>
                </ul>
            </nav>


        </div>
    );
}
