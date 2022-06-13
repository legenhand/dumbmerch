import React, {Component} from 'react';
import Navbar from "../components/navbar";
import FormCategory from "../components/formCategory";

class EditCategory extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid bg-black p-5 text-white" style={{height: '88vh'}}>
                    <h4>Edit Category</h4>
                    <FormCategory/>
                </div>
            </div>
        );
    }
}

export default EditCategory;