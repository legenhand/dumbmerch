import React from 'react';

function LoginForm(props) {
    return (
        <div className="container-fluid bg-grey w-75 rounded-3 px-4">
            <h3 className="text-white py-4">Login</h3>
            <form action="">
                <input type="Email" className="form-control my-3 bg-dark text-white" placeholder="Email"/>
                <input type="password" className="form-control my-3 bg-dark text-white" placeholder="Password"/>
                <button type="button" className="btn btn-danger w-100 my-4">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;