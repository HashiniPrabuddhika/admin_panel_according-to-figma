import React from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../style.css';

const Sidebar = () => {
  return (
    <div> 
        <section id="sidebar">
    <ul className="side-menu top">
        <li >
            <Link to="/">
                <i className="bx bxs-dashboard"></i>
                <span className="text">Dashboard</span>
            </Link>
        </li>
        <li>
        <Link to="/doctor">
                <i className="bx bx-plus-medical"></i>
                <span className="text">Doctor</span>
                </Link>
        </li>
        <li>
        <Link to="/contact">
                <i className="bx bxs-group"></i>
                <span className="text">Contact</span>
                </Link>
        </li>
        <li className="active">
        <Link to="/tracker">
                <i className="bx bxs-doughnut-chart"></i>
                <span className="text">Tracker</span>
                </Link>
        </li>
    </ul>
</section></div>
  )
}

export default Sidebar