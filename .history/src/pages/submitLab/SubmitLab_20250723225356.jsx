import React from 'react'
import './submitlab.css'
import Lin
import LabInfo from '../../components/LabInfo.jsx'
import Layout from '../../components/layout/Layout.jsx'

const lab = [
  { title: 'JavaScript Loops Lab', hashtags:'#Javascript #Loops #Beginner', task:'Create interactive loops using for while, and for Each methods. Implement counter functionality and array manipulation techniques.' , deadline: 'Due in 2 days', point: '50pts' },
];

function SubmitLab() {
  return (
    <Layout>
        {lab.map((lab, index) => (
        <LabInfo
          key={index}
          title={lab.title}
          hashtags={lab.hashtags}
          task={lab.task}
          deadline={lab.deadline}
          point={lab.point}

        />
      ))}

      <h3>Submit Your Work</h3>
      <div className="submit-option">
        <button className={`button ${location.pathname === "" ? "active" : ""}`}>Upload File</button>
        <button className={`button ${location.pathname === "" ? "active" : ""}`}>Submit Link</button>
      </div>

      <div className="upload">
        <form action="">
            <p>Drag and drop your files here! or</p>
            <input type="file" /><br />
            <span>Accepted formats: .zip, .html, .js, .py, .txt</span>
        </form>
      </div>
      <div className="nav">
        <select name="" id="">
            <option value="">Show All</option>
        </select>
        <div className="bar">
            
        </div>
      </div>
      <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Lab Title</th>
            <th>URL</th>
            <th>Points</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>01</td>
            <td>JavaScript Loops Assignment</td>
            <td className='url'>https://www.producthunt.com</td>
            <td>832</td>
            <td>Jan 1, 2020</td>
            <td>Delivered</td>
        </tr>
        <tr>
            <td>02</td>
            <td>JavaScript Loops Assignment</td>
            <td className='url'>https://www.producthunt.com</td>
            <td>832</td>
            <td>Jan 1, 2020</td>
            <td>Delivered</td>
        </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export default SubmitLab