import React from 'react';
import logo from '../assets/logo.png';
function Login(props) {
    return (
        <div className="container-fluid bg-black p-5" style={{height: '100vh'}}>
            <div className="row p-5">
                <div className="col">
                    <img src={logo} alt="" width="200vw"/>
                    <h1 className="text-white mt-4">Easy, Fast and Reliable</h1>
                    <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <span className="fw-bolder">Indonesia</span></p>
                    <div className="">

                    </div>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    );
}

export default Login;