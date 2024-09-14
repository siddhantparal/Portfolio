import React from "react";
import Adyapith from '../images/Landscape.jpg';
import Road from '../images/Landscape/Road.jpg';
import Valley from '../images/Landscape/Valley.jpg';
import Silk from '../images/Landscape/Silk.jpg';
//import Boat from '../images/Landscape/Boat.jpg';
import Love from '../images/Landscape/Love.jpg';

const Landscape = () => {
    return (
        <>
        
        <div className="Gal">
        <h1>Landscape Shots</h1>
        <div className="photos">
            
            <div className="Frame">
            <img src={Adyapith} alt={Adyapith} ></img>
            </div>

            <div className="Frame">
            <img src={Silk} alt={Silk} ></img>
            </div>

            <div className="Frame">
            <img src={Love} alt={Love}  ></img>
            </div>

            <div className="Frame">
            <img src={Valley} alt={Valley} ></img>
            </div>

            <div className="Frame">
            <img src={Road} alt={Road} ></img>
            </div>

        </div>
        </div>

        </>

    )
}

export default Landscape;