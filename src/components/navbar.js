import logo from '../assets/logo.png';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid" style={{
                height: '10vh'
            }}>
                <Link to="/" className="h-100 ms-3"><img src={logo} alt="" className="h-100"/></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">

                    <Link className="nav-link ms-auto text-white" to="/complain">Complain</Link>
                    <Link className="nav-link mx-4 text-white" to="/category">Category</Link>
                    <Link className="nav-link me-4 text-white" to="/product">Product</Link>
                    <Link className="nav-link me-4 text-white" to="/profile">Profile</Link>
                    <Link className="nav-link me-4 text-white" to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
