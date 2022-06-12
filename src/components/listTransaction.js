import React from 'react';
import mouse from '../assets/mouse.jpg';
import logo from '../assets/logo.png'
function ListTransaction(props) {
    return (
        <div className="container-fluid">
            <div className="row bg-grey" style={{height: '22vh'}}>
                <div className="col">
                    <div className="d-flex flex-row">
                        <div className="my-auto me-3">
                            <img src={mouse} alt="" height="100px"/>
                        </div>
                        <div className="d-flex flex-column me-auto my-2">
                            <span className="text-primary fs-5">Mouse</span>
                            <span className="text-primary">Saturday, 14 Juli 2022</span>
                            <span className="text-white">Price : Rp. 500.000</span> <br/>
                            <span className="text-white fw-bolder">Sub Total : 500.000</span>
                        </div>
                        <div className="d-flex me-2">
                            <img src={logo} alt="" height="100px" className="my-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListTransaction;