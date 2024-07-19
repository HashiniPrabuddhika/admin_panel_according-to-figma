import React from 'react'
import CalendarHeatmapComponent from '../layouts/CalendarHeatmap';
const excercises = () => {
  return (
    <div>
            <div id="my-progress" className="progress-box">
                <div className="progress-content">
                    <div className="progress-item">
                        <p className="text1">Walked 🐾</p>
                        <p className="text2">4532 steps</p>
                    </div>
                </div>
                <div className="progress-content2">
                    <div className="progress-item">
                        <p className="text1">My Goal🎗</p>
                        <p className="text2">6500 steps</p>
                    </div>
                </div>
                <div className="circle-progress-container">
                    <div className="circle-progress">
                        <div className="circle-inner">
                            <span className="circle-number">4532</span>
                            <div className="circle-text">left</div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="progress-content3">
                    <div className="progress-item">
                        <p className="text1">Burned🔥</p>
                        <p className="text2">325 kcal</p>
                    </div>
                </div>
                <div className="progress-content4">
                    <div className="progress-item">
                        <p className="text1">My Goal🏆</p>
                        <p className="text2">800 kcal</p>
                    </div>
                </div>
                <div className="circle-progress-container2">
                    <div className="circle-progress2">
                        <div className="circle-inner">
                            <span className="circle-number">4532</span>
                            <div className="circle-text">left</div>
                        </div>
                    </div>
                </div>
                <div><a href="#" className="edit-goals">Edit Goals</a></div>
            </div>

            <section id="content">
                <div className="main-container">
                    <div className="notification">Advice! Connect your Apple Watch for better results.
                        <div className="circle-notification-container">
                            <div className="circle-notification">🤖</div>
                        </div>
                    </div>
                    <div className="Popular_Training"><p>Popular Training</p></div>
                    <div className="training-container">
                        <div className="training-item">
                            <div className="circle-text-container">
                                <div className="circle-notification">🦍</div>
                            </div>
                            <span className="texts">Power Training</span>
                            <span className="texts2">395 kcal / h</span>
                        </div>
                        <div className="training-item">
                            <div className="circle-text-container">
                                <div className="circle-notification">🐍</div>
                            </div>
                            <span className="texts">Yoga Training</span>
                            <span className="texts2">395 kcal / h</span>
                        </div>
                        <div className="training-item">
                            <div className="circle-text-container">
                                <div className="circle-notification">🐌</div>
                            </div>
                            <span className="texts">Stretching</span>
                            <span className="texts2">395 kcal / h</span>
                        </div>
                    </div>
                    <div className="training-container">
                        <div className="Activity_Statistic">
                            <p className="activity">Activity Statistic</p>
                            <CalendarHeatmapComponent />
                        </div>
                        <div className="myTraining">
                            <div className="myTraining-header">
                                <p className="activity">My Training</p>
                                <div className="circle-training-container">
                                    <i className="bx bx-plus-medical"></i>
                                </div>
                            </div>
                            <div className="table-container">
                                <div className="table-row">
                                    <div className="table-cell light-gray">Training</div>
                                    <div className="table-cell black-text">TRX Cardio</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell light-gray">Burned</div>
                                    <div className="table-cell black-text">350 kcal</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell light-gray">Spend</div>
                                    <div className="table-cell black-text">1h 45m</div>
                                </div>

                                <div className='table2'>
                                    <div className="table-row">
                                        <div className="table-cell light-gray">Training</div>
                                        <div className="table-cell black-text">Stretching</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell light-gray">Burned</div>
                                        <div className="table-cell black-text">180 kcal</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell light-gray">Spend</div>
                                        <div className="table-cell black-text">30 m</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='heartRateRow'>
                        <div className='heartRate'>
                            <p className="activity">Heart Rate</p>
                            <div className='heartRateContainer'>
                                <div className='heartRateInfo'>
                                    <div className="rate-details">
                                        <span className='textRate'>💓 75 bpm</span>
                                        <span className='textRate2'>Health zone</span>
                                    </div>
                                    <div className="circle-heartRate-container">
                                        <i className="bx bxs-doughnut-chart"></i>
                                    </div>
                                    <p className="heart-text">Additional Info</p>
                                </div>
                            </div>
                        </div>

                        <div className='heartRate'>
                            <p className="activity">Water Balance</p>
                            <div className='heartRateContainer'>
                                <div className='heartRateInfo'>
                                    <div className="rate-details">
                                        <span className='textRate2'>🐳 <span className="light-gray">Drunk</span></span>
                                        <span className='textRate'>1250 ml<span className="light-gray">/2000 ml</span></span>
                                    </div>
                                    <div className="circle-heartRate-container">
                                        <i className="bx bx-plus-medical"></i>
                                    </div>
                                    <p className="heart-text">Add Water</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default excercises
