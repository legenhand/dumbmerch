import React from 'react';

function TableProduct(props) {
    const productList = [{
        photo: 'Mouse.jpg',
        name: 'Mouse',
        desc: 'lorem ipsum blablabaaa',
        price: 500000,
        qty: 600
    },{
        photo: 'Mouse.jpg',
        name: 'Mouse',
        desc: 'lorem ipsum blablabaaa',
        price: 500000,
        qty: 600
    },{
        photo: 'Mouse.jpg',
        name: 'Mouse',
        desc: 'lorem ipsum blablabaaa',
        price: 500000,
        qty: 600
    },{
        photo: 'Mouse.jpg',
        name: 'Mouse',
        desc: 'lorem ipsum blablabaaa',
        price: 500000,
        qty: 600
    }];
    let count = 0;
    return (
        <div className="container-fluid bg-black p-5" style={{
            height: "88vh"
        }}>
            <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Product Desc</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    productList.map((data,index)=>{
                        count += 1;
                        return <tr key={index}>
                            <td>{count}</td>
                            <td>{data.photo}</td>
                            <td>{data.name}</td>
                            <td>{data.desc}</td>
                            <td>{data.price}</td>
                            <td>{data.qty}</td>
                            <td><button type="button" className="btn btn-success w-25 bg-success me-3 my-2">
                                Edit
                            </button>
                                <button type="button" className="btn btn-danger bg-danger w-25 my-2">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>


            </table>
        </div>
    );
}

export default TableProduct;