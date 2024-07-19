import React from 'react';
import { NavLink } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../style.css';

const Sidebar = () => {
  return (
    <div>
        <section id="sidebar">
            <ul className="side-menu top">
                <li>
                    <NavLink to="/" activeClassName="active">
                        <i className="bx bxs-dashboard"></i>
                        <span className="text">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/doctor" activeClassName="active">
                        <i className="bx bx-plus-medical"></i>
                        <span className="text">Doctor</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        <i className="bx bxs-group"></i>
                        <span className="text">Contact</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tracker" activeClassName="active">
                        <i className="bx bxs-doughnut-chart"></i>
                        <span className="text">Tracker</span>
                    </NavLink>
                </li>
            </ul>
        </section>
    </div>
  );
}

export default Sidebar;
