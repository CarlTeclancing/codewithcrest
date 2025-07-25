import React from 'react'
import  '../pages/ranking/ranking.css'
function UserCard({ name, points, profilePic }) {
  return (
    <div className="user-card">
      <img src={profilePic} alt={`${name}'s profile`} className="profile-pic" />
      {/* <div className="user-info"> */}
        <h3 className="user-name">{name}</h3>
        <p className="user-points">{points} pts</p>
      {/* </div> */}
    </div>
  )
}

export default UserCard