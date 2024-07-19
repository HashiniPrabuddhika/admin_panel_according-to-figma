import React, { useState } from 'react';
import './foodTabs.css'; 

const FoodTabs = () => {
    const [activeTab, setActiveTab] = useState('breakfast');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="food-tabs-container">
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'breakfast' ? 'active' : ''}`}
                    onClick={() => handleTabClick('breakfast')}
                >
                    Breakfast
                </button>
                <button
                    className={`tab-button ${activeTab === 'lunch' ? 'active' : ''}`}
                    onClick={() => handleTabClick('lunch')}
                >
                    Lunch
                </button>
                <button
                    className={`tab-button ${activeTab === 'snacks' ? 'active' : ''}`}
                    onClick={() => handleTabClick('snacks')}
                >
                    Snacks
                </button>
                <button
                    className={`tab-button ${activeTab === 'dinner' ? 'active' : ''}`}
                    onClick={() => handleTabClick('dinner')}
                >
                    Dinner
                </button>
            </div>
        </div>
    );
};

export default FoodTabs;
