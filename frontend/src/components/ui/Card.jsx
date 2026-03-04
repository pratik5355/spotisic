import React from 'react';
import { Play } from 'lucide-react';
import './Card.css';

const Card = ({ title, artist, imageUrl, rounded = false }) => {
    return (
        <div className="card-container">
            <div className="card-image-wrapper">
                <img
                    src={imageUrl}
                    alt={title}
                    className={rounded ? 'image-rounded' : ''}
                />
                <button className="card-play-btn">
                    <Play fill="black" size={24} />
                </button>
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle">{artist}</p>
        </div>
    );
};

export default Card;
