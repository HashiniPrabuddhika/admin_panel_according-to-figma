import React from 'react';
import './foodCard.css'; 

const FoodCard = ({ name, image,contant }) => {
    return (
        <div className="food-card">
            <img src={image} alt={name} className="food-card-image" />
            <div className="food-card-name">{name}</div>
            <div className="food-card-content">{contant}
            <div className="circle-training-container">
                <i className="bx bx-plus-medical"></i>
            </div>
            </div>

        </div>
    );
};

export default FoodCard;
