import React from 'react';

function FormProduct(props) {
    return (
        <div>
            <form action="">
                <input type="file" className="form-control" placeholder="Upload Image"/>
                <input type="text" className="form-control my-4" placeholder="Name Product" value={props.name}/>
                <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="Description">{props.desc}</textarea>
                <input type="text" className="form-control my-4" placeholder="Price" value={props.price}/>
                <input type="text" className="form-control my-4" placeholder="stock" value={props.stock}/>
                <button className="btn btn-success w-100">Save</button>
            </form>
        </div>
    );
}

export default FormProduct;