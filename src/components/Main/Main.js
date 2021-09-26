import React from 'react';
import { useState, useEffect } from 'react';
import Band from '../Band/Band';
import Cart from '../Cart.js/Cart';

import './Main.css';
const Main = () => {
    const [bandList, setBandList] = useState([]);
    const [addedBand, setAddedBand] = useState([]);

    // i have created and hosted an api on my github 

    useEffect(
        () => {
            fetch('https://shudiptod.github.io/api/bd-bands.json')
                .then(res => res.json())
                .then(data => setBandList(data));
        }, []
    )
    const handleAdd = (band) => {
        // console.log(band);
        const added = [...addedBand];
        let flag = 0;
        if (added.length !== 0) {
            for (const item of added) {
                if (item.index === band.index) {
                    flag = 1;
                }
            }
            if (flag === 0) {
                added.push(band);
            }
            // console.log(added);
            setAddedBand(added);
        }
        else {
            added.push(band);
            // console.log(added);
            setAddedBand(added);
        }


    };
    return (
        <div className="main-component">
            <div className="band-section">
                {
                    bandList.map(
                        band => <Band key={band._id} band={band} handleAdd={handleAdd} />
                    )
                }
            </div>
            <div className="cart-section">
                <Cart addedBand={addedBand} />
            </div>
        </div>
    );
};

export default Main;