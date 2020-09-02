import React, { useState } from "react";


export  function LoginView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                    <input
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                <label>Password</label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />

                <button block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}