import React from 'react'
import './submitlab.css'
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
        for
      </div>
    </Layout>
  )
}

export default SubmitLab