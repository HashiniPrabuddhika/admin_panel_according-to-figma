import React, { useState } from 'react';
import { format, startOfWeek, endOfWeek, addWeeks, subWeeks, eachDayOfInterval } from 'date-fns';
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import './calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const startOfCurrentWeek = startOfWeek(currentDate);
    const endOfCurrentWeek = endOfWeek(currentDate);

    const days = eachDayOfInterval({ start: startOfCurrentWeek, end: endOfCurrentWeek });

    const handlePrevWeek = () => {
        setCurrentDate(subWeeks(currentDate, 1));
    };

    const handleNextWeek = () => {
        setCurrentDate(addWeeks(currentDate, 1));
    };

    const leftMonthYear = format(days[0], 'MMMM yyyy');
    const rightMonthYear = format(days[6], 'MMMM yyyy');

    return (
        <div className="calendar-container">
            <div className="calendar-header">
               
                <div className="calendar-header-content">
                    <div className="month-year left">
                        <span className="month">{format(days[0], 'MMMM')}
                             <span className="year">{format(days[0], ' yyyy')}</span>
                        </span>
                       
                    </div>
                    <button onClick={handlePrevWeek} className="nav-button">< SlArrowLeft /></button>
                    <div className="calendar-body">
                        {days.map((day, index) => (
                            <div
                                key={index}
                                className={`calendar-day ${index === 0 ? 'first-index' : ''} ${index === 6 ? 'last-index' : ''}`}
                            >
                                {format(day, 'd')}
                            </div>
                        ))}
                    </div>
                    <button onClick={handleNextWeek} className="nav-button"><SlArrowRight /></button>
                    <span className="nav-button" style={{ color: '#121A2D' , marginLeft:'10px'}}><GoArrowRight /></span>

                    <div className="month-year right" style={{ color: '#888C96' }}>
                        <span className="month">{format(days[6], 'MMMM')}
                        <span className="year">{format(days[6], ' yyyy')}</span>
                        </span>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Calendar;
