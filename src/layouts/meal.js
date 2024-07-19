import React from 'react'
import CalendarHeatmapComponent from '../layouts/CalendarHeatmap';
import './meal.css';
const meal = () => {
  return (
    <div>
            <div id="my-progress" className="progress-box">
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
                                <td className="word">Weight</td>
                                <td className="word">Height</td>
                                <td className="word">Goal</td>
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
                      <div className="progress-filled" style={{ width: '50%' , backgroundColor: '#738FFF'}}></div>
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
                        </table>
                    </div>
            </div>

          
    </div>
  )
}

export default meal
