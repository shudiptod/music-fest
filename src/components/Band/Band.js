import React from 'react';
import './Band.css';
import { FaMusic } from 'react-icons/fa';
const Band = (props) => {


    const { band } = props;

    return (
        <div className="band">
            <div className="image-container">
                <img className="band-image" src={band.picture} alt={band.name + " picture"} />
            </div>
            <div className="band-detail">
                <h2>{band.name}</h2>
                <p>Genre: <span className="detail-focus genre">{band.genre}</span></p>
                <h5>Lead Vocal: <span className="detail-focus">{band.lead_singer}</span></h5>
                <h5>Popular Songs</h5>
                <hr className="divider" />
                <p className="popular-song"><small>{band.popular_songs.join(', ')}</small></p>
                <h5 className="fee">Contract Fee: BDT <span className="detail-focus">{band.fee}</span></h5>
            </div>
            <button onClick={() => props.handleAdd(band)} className="add-button"><i><FaMusic /></i>Contract</button>
        </div>
    );
};

export default Band;