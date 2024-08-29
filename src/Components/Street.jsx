import React from "react";
import Adyapith from '../images/Street.jpg';
import Cycle from '../images/Street/Cycle.jpg';
import Goli from '../images/Street/Goli.jpg';
import Market from '../images/Street/Market.jpg';
import Victoria from '../images/Street/Victoria.jpg';
import Raincoat from '../images/Street/Raincoat.jpg';
import Bridge from '../images/Street/Bridge.JPG';
import Bus from '../images/Street/Bus.jpg';
import Fire from '../images/Street/Fire.jpg';
import Std from '../images/Street/Std.jpg';
import Maidan from '../images/Street/Maidan.jpg';

const Street = () => {
    return (
        <>
        
        <div className="Gal">
        <h1>Street Shots</h1>
        <div className="photos">
            
            <div className="Frame">
            <img src={Adyapith} alt={Adyapith} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Bridge} alt={Bridge} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Cycle} alt={Cycle} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Goli} alt={Goli} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Maidan} alt={Maidan} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Raincoat} alt={Raincoat} height={'450px'} ></img>
            </div>

            <div className="Frame">
            <img src={Victoria} alt={Victoria} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Fire} alt={Fire} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Market} alt={Market} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Std} alt={Std} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Bus} alt={Bus} height={'450px'}></img>
            </div>
        </div>
        </div>

        </>

    )
}

export default Street;