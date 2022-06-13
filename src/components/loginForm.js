import React from 'react';
import {useNavigate} from "react-router-dom";
import {statusLogin} from "../dummydata/dummydata";

function LoginForm(props) {
    const navigate = useNavigate()
    async function handleClick(event) {
        statusLogin.status = true;
        event.preventDefault();
        navigate("../", { replace: true })
    }

    return (
        <div className="container-fluid bg-grey w-75 rounded-3 px-4">
            <h3 className="text-white py-4">Login</h3>
            <form action="">
                <input type="Email" className="form-control my-3 bg-dark text-white" placeholder="Email"/>
                <input type="password" className="form-control my-3 bg-dark text-white" placeholder="Password"/>
                <button type="button" className="btn btn-danger w-100 my-4" onClick={handleClick}>Login</button>
            </form>
        </div>
    );
}

export default LoginForm;