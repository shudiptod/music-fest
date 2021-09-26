
import React from 'react';
import './Cart.css';
import { FaFireAlt } from 'react-icons/fa';
const Cart = (props) => {
    const { addedBand } = props;
    console.log("cart", addedBand);
    let totalFee = 0;
    for (const item of addedBand) {
        totalFee = totalFee + item.fee;
    }
    return (
        <div className="cart">
            <div className="summary">
                <h3>Contracts Summary</h3>
                <h5>Total Bands: {addedBand.length}</h5>
                <h5>Total Fee: {totalFee}</h5>
            </div>
            <button className="confirm-button"><i><FaFireAlt /> </i> Let's fest</button>
            <div className="band-names">
                <h3>Selected Bands Names:</h3>
                <ul>
                    {addedBand.map(item => <li><h5>{item.name}</h5></li>)}
                </ul>

            </div>
        </div>
    );
};

export default Cart;
