import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import '../style.css';

import Sidebar from '../layouts/Sidebar';
import Profile from '../layouts/profile';
import Excercises from '../layouts/excercises';
import Meals from '../layouts/meal'; // Ensure this is the correct path

const Tracker = () => {
  const [activeTab, setActiveTab] = useState('meals');

  const handleTabClick = (tab) => {
    console.log(`Switching to ${tab} tab`); // Debugging statement
    setActiveTab(tab);
  };

  return (
    <div>
      <Sidebar />
      <Profile />

      <section id="tab-bar">
        <button
          className={`tab-button ${activeTab === 'meals' ? 'active' : ''}`}
          onClick={() => handleTabClick('meals')}
        >
          Meals
        </button>
        <button
          className={`tab-button ${activeTab === 'exercise' ? 'active' : ''}`}
          onClick={() => handleTabClick('exercise')}
        >
          Exercise
        </button>
      </section>

      {activeTab === 'meals' && <Meals />}
      {activeTab === 'exercise' && <Excercises />}

      <section id="progress">
                <p className="progress">Progress</p>
                <p className="date">26 Aug 2019</p>
            </section>
    </div>
  );
};

export default Tracker;
