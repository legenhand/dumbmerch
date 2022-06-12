import React from 'react';
import {convertToRupiah} from "../helper/helper";

function ProductCard(props) {
    return (
        props.data.map((data, index) =>
            <div className="col" key={index}>
                <div className="bg-grey p-0 m-0 rounded-3">
                    <img src={data.image} alt="" width="100%" height="200vh" className="rounded-top"/>
                    <div className="p-3">
                        <h4 className="text-primary">{data.name}</h4>
                        <span className="text-white">{convertToRupiah(data.price)}</span><br/>
                        <span className="text-white">Stock : {data.stock}</span>
                    </div>
                </div>
            </div>
        )
    );
}

export default ProductCard;