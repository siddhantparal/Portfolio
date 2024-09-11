
import React from "react";
import Street from '../images/Street.jpg';
import Landscape from '../images/Landscape.jpg';
import Product from '../images/Product.jpg';
import Other from '../images/Other.jpg';
import { Link } from 'react-router-dom';



const Content = () => {
    return (
        <>
            <div className="Work">
                <div className="text">
                    <h1>
                        Works
                    </h1>
                                      
                
                </div>
            </div>

           
                <div className="row">
                
                        
                        <div className="card"><Link to={'/Street'}>
                                                        
                                <img src={Street} alt={Street}></img>
                            
                            <div class='text-on-image'>
                            
                                <h5> STREET </h5>
             
                            </div>
  
                            </Link></div>
                        
                        <div className="card"><Link to={'/Landscape'}>
                                                        
                                <img src={Landscape} alt={Landscape}></img>
                            
                            <div class='text-on-image'>
                                <h5> LANDSCAPE </h5>
             
                            </div>
  
                            </Link></div>

                        <div className="card"><Link to={'/Product'}>
                                                        
                                <img src={Product} alt={Product}></img>
                            
                            <div class='text-on-image'>
                                <h5> PRODUCT </h5>
             
                            </div>
  
                            </Link></div>

                        <div className="card"><Link to={'/Other'}>
                                                        
                                <img src={Other} alt={Other}></img>
                            
                            <div class='text-on-image'>
                                <h5> OTHERS </h5>
             
                            </div>
  
                            </Link></div>

                    
                </div>
    
        </>
    );
};

export default Content;
