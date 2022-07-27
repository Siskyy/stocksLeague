import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="Login-box">
            <main class="form-signin w-100 m-auto">
            <form>
                <h1 class="h3 mb-3 fw-normal">Please Login</h1>
                <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            </form>
            </main>
        </div>
    )
}

export default Login;