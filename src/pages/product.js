import keyboard from '../assets/keyboard.jpg';
import mouse from '../assets/mouse.jpg';
import ProductCard from "../components/ProductCard";


function Product(){

    const productData = [{
        name : 'Mouse',
        price : 600000,
        stock : 700,
        image : mouse
    },{
        name : 'Keyboard',
        price : 700000,
        stock : 500,
        image : keyboard
    }];

    return(
        <div className="container-fluid bg-black" style={{
            height: "88vh"
        }}>
            <div className="container pt-4">
                <h2 className="text-primary">Product</h2>
                <div className="row row-cols-5" style={{width: '100%'}}>
                        <ProductCard data={productData}/>
                </div>
            </div>
        </div>
    )
}

export default Product;