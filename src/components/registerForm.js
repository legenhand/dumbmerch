import React from 'react';
import {dataProduct} from "../dummydata/dummydata";
import {useNavigate} from "react-router-dom";

function RegisterForm(props) {
    const navigate = useNavigate()
    async function handleClick(event) {
        event.preventDefault();
        navigate("../login", { replace: true })
    }
    return (
        <div className="container-fluid bg-grey w-75 rounded-3 px-4">
            <h3 className="text-white py-4">Register</h3>
            <form action="">
                <input type="text" className="form-control my-3 bg-dark text-white" placeholder="Name"/>
                <input type="Email" className="form-control my-3 bg-dark text-white" placeholder="Email"/>
                <input type="password" className="form-control my-3 bg-dark text-white" placeholder="Password"/>
                <button type="button" className="btn btn-danger w-100 my-4" onClick={handleClick}>Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;