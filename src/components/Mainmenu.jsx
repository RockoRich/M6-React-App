import axios from "axios";
import { useState, useEffect } from "react";

export function Mainmenu({setView}) {

    // Event handler function for the "Customers" button
    const Customers = (e) => {
        e.preventDefault();
        setView('customers');
    }

    // Event handler function for the "Logout" button
    const Login = (e) => {
        e.preventDefault();
        setView('login');
    }

    // State variable for storing the products
    const [products, setProducts] = useState(null);

    // Fetching the products from an API using axios and updating the state
    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((res) => {
                console.log(res);
                setProducts(res.data.products);
            });
    }, []);

    return (
    <>
        {/* Header */}
        <div className="header p-3 mb-3 text-white " id="bg-black">
            <div className="text-center">
                <p className="display-3">React by Mir Singh</p><br/>
                {/* "Customers" button */}
                <button className="btn btn-outline-light mb-1" type="button" onClick={Customers}>Customers</button>&nbsp;&nbsp;&nbsp;
                {/* "Logout" button */}
                <button className="btn btn-outline-light mb-1" type="button" onClick={Login}>Logout</button>
            </div>
        </div>

        <br/>

        {/* Image carousel */}
        <div className="container text-center">
            <div id="carouselExampleControls" className="col carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="image" src="./images/LAMBO.jpg"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="image" src="./images/LAMBO.jpg"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="image" src="./images/LAMBO.jpg"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <br/><br/>

        {/* Card with "PRODUCTS" heading */}
        <div className="card" id="bg-black">
            <div className="card-body d-grid text-center mt-2 mb-2">
                <h4 className="text-center display-3 text-white">PRODUCTS</h4>
            </div>
        </div>

        <br></br>

        <div className="container">
            {products && (
                <div className="row">
                    {/* Displaying the product cards */}
                    {products.slice(0, 3).map((product, index) => (
                        <div className="col-md-4 " key={index}>
                            <div className="text-center">
                                <img src={product.thumbnail} className="card-img-top" style={{ width: "200px", height: "200px" }} />
                            </div>
                            <div className="text-center">
                                <h5>{product.title}</h5>
                            </div>
                            <div className="text-center">
                                <p>{product.description}</p>
                            </div>
                            <div className="text-center">
                                <p>{product.price}</p>
                            </div>
                            <div className="text-center">
                                <button className='btn btn-success'>Buy</button>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    ))}
                </div>
            )}
        </div>

    </>
    )
}