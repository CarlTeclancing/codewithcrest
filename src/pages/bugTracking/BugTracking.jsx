import React from 'react'
import './bug.css'
import Log from '../../components/Log'
import Layout from '../../components/layout/Layout'


const logs = [
  { title: 'Login Form Not Submitting', message:'Bug reported', time:'2 hours ago'},
  { title: 'API Response Timeout Error', message:'Bug fixed', time:'1 day ago'},
  
];
function BugTracking() {
  return (
    <Layout>
        <div className='box-updates'>
            <div className="box">
                <div className="headline">
                    <p>Total bugs</p>
                </div>
                <h4>247</h4>
                <p>+12% from last month</p>
            </div>
            <div className="box">
                <div className="headline">
                    <p>Open Issues</p>
                </div>
                <h4>89</h4>
                <p>-5% from last week</p>
            </div>
            <div className="box">
                <div className="headline">
                    <p>In progress</p>
                </div>
                <h4>34</h4>
                <p>+8% from yesterday</p>                
            </div>
            <div className="box">
                <div className="headline">
                    <p>Resolved</p>
                </div>
                <h4>124</h4>
                <p>+15% this month</p>
            </div>      
        </div>

           <div className="page">
                <div className="report-box">
                    <h4>Report New Bug</h4>
                    <div className="new-bug">  
                        <div className="bug-category">
                        <h4>Bug Title</h4>
                        <input type="text" placeholder='Enter bug title'/>
                        <h4>Category</h4>
                        <div className="checkbox">
                            <input type="radio" value="" /><label htmlFor="">Typos</label>
                            <input type="radio" value="" /><label htmlFor="">UI</label>
                            <input type="radio" value="" /><label htmlFor="">Logic</label>
                            <input type="radio" value="" /><label htmlFor="">Crash</label>
                        </div>
                        <h4>Code Snippet</h4>
                        <textarea name="" id="" placeholder='Paste your code here....' className='textarea'></textarea>
                        </div>

                        <div className="bug-level">
                            <h4>Project</h4>
                            <input type="text" placeholder='HTML   CSS  React.js   PHP  JS'/>
                            <h4>Level</h4>
                            <div className="checkbox">
                                <input type="radio" value="" /><label htmlFor="">Low</label>
                                <input type="radio" value="" /><label htmlFor="">Meduim</label>
                                <input type="radio" value="" /><label htmlFor="">High</label>
                            </div>
                            <h4>Description</h4>
                            <textarea name="" id="" placeholder='Describe the bug here...' className='textarea'></textarea>
                        </div>
                    </div>

                    <p>
                        <button>Report Bug</button>
                    </p>
                </div>

                <div className="resolution-progress">
                    <h4>Bug Resolution Progress</h4>
                </div>
            </div>

        <div className="page">
            <table>
            <thead>
            <tr>
                <th>Bug Id</th>
                <th>Title</th>
                <th>Status</th>
                <th>Severity</th>
                <th>Points</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>BUG01</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
    
            </tbody>
            </table>

            <div className="activity">
                <h4>Activity Log</h4>
                
                {logs.map((log, index) => (
                <Log
                    key={index}
                    title={log.title}
                    message={log.message}
                    time={log.time}
                />
                ))}
            </div>

        </div>
    </Layout>
  )
}

export default BugTracking