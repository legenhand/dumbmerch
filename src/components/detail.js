import React from 'react';
import mouse from '../assets/mouse.jpg';
function Detail(props) {
    return (
        <div className="container-fluid bg-black p-5" style={{height: '88vh'}}>
            <div className="row mx-5">
                <div className="col-5">
                    <img src={mouse} alt="" height="500vh" width="400vw"/>
                </div>
                <div className="col">
                    <h3 className="text-primary">Mouse</h3>
                    <span className="text-white">Stock : 600</span>
                    <p className="text-white my-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias debitis earum mollitia odio! Atque consequatur dolorem doloribus ex excepturi fuga fugit ipsum iure, necessitatibus nemo pariatur quaerat, quidem repellat, temporibus vero. Ab, ad at consectetur dolores eius esse ex, illum in necessitatibus nemo pariatur perspiciatis praesentium quisquam, quo veritatis.
                    </p>
                    <h4 className="text-primary text-end">Rp. 300.900</h4>
                    <button type="button" className="btn btn-danger w-100 my-4">Buy</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;