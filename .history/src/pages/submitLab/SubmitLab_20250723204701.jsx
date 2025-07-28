import React from 'react'
import './submitlab.css'
import LabInfo from '../../components/LabInfo.jsx'
import Layout from '../../components/layout/Layout.jsx'

const lab = [
  { title: 'JavaScript Loops Lab', hashtags:'#Javascript', task:'Create interactive loops using for while, and for Each methods. Implement counter functionality and array manipulation techniques.' , deadline: '/avatars/alice.jpg', points: 1200 },
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
          task={lab.task}
        />
      ))}
    </Layout>
  )
}

export default SubmitLab