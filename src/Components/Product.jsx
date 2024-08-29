import React from "react";
import Adyapith from '../images/Product.jpg';
import Manchester from '../images/Product/Manchester.jpg';
import Walker from '../images/Product/Walker.jpg';
import Sonata from '../images/Product/Sonata.jpg';


const Product = () => {
    return (
        <>
        
        <div className="Gal">
        <h1>Product Shots</h1>
        <div className="photos">
            
            <div className="Frame">
            <img src={Adyapith} alt={Adyapith} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Manchester} alt={Manchester} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Walker} alt={Walker} height={'450px'}></img>
            </div>          

            <div className="Frame">
            <img src={Sonata} alt={Sonata} height={'450px'}></img>
            </div>
        </div>
        </div>

        </>

    )
}

export default Product;