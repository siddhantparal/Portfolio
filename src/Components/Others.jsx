import React from "react";
import Adyapith from '../images/Other.jpg';
import Bird from '../images/Others/Bird.jpg';
import Leaves from '../images/Others/Leaves.jpg';
import Kite from '../images/Others/Kite.jpg';
import Cats from '../images/Others/Cats.jpg';
import Tree from '../images/Others/Tree.jpg';


const Others = () => {
    return (
        <>
        
        <div className="Gal">
        <h1>Others Shots</h1>
        <div className="photos">
            
            <div className="Frame">
            <img src={Adyapith} alt={Adyapith} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Kite} alt={Kite} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Bird} alt={Bird} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Leaves} alt={Leaves} height={'450px'}></img>
            </div>          

            <div className="Frame">
            <img src={Cats} alt={Cats} height={'450px'}></img>
            </div>

            <div className="Frame">
            <img src={Tree} alt={Tree} height={'450px'}></img>
            </div>
        </div>
        </div>

        </>

    )
}

export default Others;