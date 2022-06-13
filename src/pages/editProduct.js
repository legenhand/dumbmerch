import React from 'react';
import Navbar from "../components/navbar";
import FormProduct from "../components/formProduct";

function EditProduct(props) {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid bg-black p-5 text-white" style={{height: '88vh'}}>
                <h4>Edit Product</h4>
                <FormProduct/>
            </div>
        </div>
    );
}

export default EditProduct;