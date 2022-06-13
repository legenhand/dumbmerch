import React from 'react';

function FormCategory(props) {
    return (
        <div>
            <form action="">
                <input type="text" className="form-control my-4" placeholder="name category" value={props.valuecategory}/>
                <button className="btn btn-success w-100">Save</button>
            </form>
        </div>
    );
}

export default FormCategory;