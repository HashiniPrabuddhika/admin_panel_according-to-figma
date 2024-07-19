import React from 'react'
import CalendarHeatmapComponent from '../layouts/CalendarHeatmap';
import './meal.css';
const meal = () => {
    return (
        <div>
            <div id="my-progress" className="progress-box2">
                <div className="progress-content">
                    <p className='counter'>Calorie counter</p>
                    <div className="progress-item">
                        <p className="text1 align-left">Eaten</p>
                        <p className="text2 align-left">1560 kcal</p>
                    </div>
                </div>
                <div className="progress-content5">
                    <div className="progress-item">
                        <p className="text1 align-left">Burned</p>
                        <p className="text2">350 kcal</p>
                    </div>
                </div>
                <div className="circle-progress-container4">
                    <div className="circle-progress4">
                        <div className="circle-inner">
                            <span className="circle-number">320</span>
                            <div className="circle-text text5">kcal left</div>
                        </div>
                    </div>
                </div>
                <div className="profile-info">
                    <table>
                        <tr>
                            <td className="word" style={{ fontSize: '14px' }}>Carbst</td>
                            <td className="word" style={{ fontSize: '14px' }}>Protein</td>
                            <td className="word" style={{ fontSize: '14px' }}>Fat</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="progress-line-container">
                                    <div className="progress-line">
                                        <div className="progress-filled" style={{ width: '70%', backgroundColor: '#FF738F' }}></div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div className="progress-line-container">
                                    <div className="progress-line">
                                        <div className="progress-filled" style={{ width: '50%', backgroundColor: '#738FFF' }}></div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div className="progress-line-container">
                                    <div className="progress-line">
                                        <div className="progress-filled" style={{ width: '30%', backgroundColor: '#B8EEA4' }}></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="word" style={{ color: '#888C96' }}>24g left</td>
                            <td className="word" style={{ color: '#888C96' }}>56g left</td>
                            <td className="word" style={{ color: '#888C96' }}>16g left</td>
                        </tr>
                    </table>
                </div>
                <div id="my-water-progress" className="progress-box3">
                <div className="progress-content">
                    <p className='counter align-left' style={{ color: '#888C96' }}>Drunk</p>
                    <span className='textRate'>1250 ml<span className="light-gray">/2000 ml</span></span>
                </div>
                <div className="circle-progress-container5">
                    <div className="circle-progress5">
                        <div className="circle-inner5">
                            <span className="circle-number" style={{ fontSize: '12px' }}>750</span>
                            <div className="circle-text text5" > ml left</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <section id="content">
                <div className="main-container">
                    <div className="notification">Great Job! Your water level is on top!
                    <div className="pic-container" style={{marginTop:'5px', marginRight:'5px'}}>
                        <img src="img/animal.png" alt="Profile Picture" className="picture" />
                    </div>
                    </div>
                    


                </div>
            </section>
        </div>
    )
}

export default meal
