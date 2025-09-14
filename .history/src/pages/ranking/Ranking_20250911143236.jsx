import React from 'react'
import './ranking.css'
import { Link } from 'react-router-dom'
import UserCard from '../../components/UserCard'

const users = [
  { name: 'De Duke Eric', points: 1200, profilePic: '../../assets/img1.jpg' },
  { name: 'Bob Smith', points: 950, profilePic: '/avatars/bob.jpg' }
];

function Ranking() {
  return (
    <div className='dashboard-container'>
        <div className="box-updates">
            <div className="box">
                <div >
                    <h4>Total Points This Week</h4>
                    <i class="bi bi-trophy-fill"></i>
                </div>
                <span className='total-points'>245</span>
                <p className='p'>Current week total</p>
            </div>
            <div className="box">
                <div>
                    <h4>Points Earned</h4>
                </div>
                <span className='points-earned'>+260</span>
                <p className='p'>From completed tasks</p>
            </div>
            <div className="box">
                <div>
                    <h4>Points Lost</h4>
                </div>
                <span className='points-lost'>-15</span>
                <p className='p'>From late submissions</p>
            </div>
        </div>
        
        <div className="progress">
            <h3>Progress to Next Rank</h3>
            <progress value={60} max={100}></progress>
            <div className="bottom-line">
                <p><span>245</span>/<span>501</span> points</p>
                <p className='blue'>Earn 80 more points to reach the next level!</p>
            </div>
        </div>

        <div className="top-coders">
            <h3>Top Coders of the Week</h3>
            <div className="first-line">
                <p>Based on lab ubmission, bug fixes, and community contributions.</p>
                <Link to="">View Full Leaderboard</Link>
            </div>

            <div className='leader-board'>
              {users.map((user, index) => (
                <UserCard
                key={index}
                name={user.name}
                points={user.points}
                profilePic={user.profilePic}
                />
              ))}
            </div>

            <div className="updates">
                <div className="user-info">
                    <h3>Points Activity Breakdown</h3>
                    
                    <div className="filter">
                        <select name="" id="">
                            <option value="">All Types</option>
                        </select>
                        <select name="" id="">
                            <option value="">Last 7 days</option>
                        </select>
                    </div>

                </div>
                <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Task Name</th>
                    <th>Task Type</th>
                    <th>Points</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Task</td>
                    <td>Community Contribution</td>
                    <td>Forum Post</td>
                    <td className='taple-point'>+5</td>
                    <td className='taple-status'>0</td>
                </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Ranking