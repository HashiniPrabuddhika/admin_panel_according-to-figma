import React from 'react'

const profile = () => {
  return (
    <div>
       <div id="profile">
                <div className="profile-container">
                    <div className="profile-pic-container">
                        <img src="img/people.png" alt="Profile Picture" className="profile-pic" />
                    </div>
                    <div className="profile-name">Bess Willis</div>
                    <p className="profile-role">24 years, California</p>
                    <div className="profile-info">
                        <table>
                            <tr>
                                <td className="word">Weight</td>
                                <td className="word">Height</td>
                                <td className="word">Goal</td>
                            </tr>
                            <tr>
                                <td className="value">70<span className="unit">kg</span></td>
                                <td className="value">175<span className="unit">cm</span></td>
                                <td className="value special">65<span className="unit special-unit">kg</span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default profile
