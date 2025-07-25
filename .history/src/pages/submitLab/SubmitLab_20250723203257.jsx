import React from 'react'
import './submitlab.css'
import LabInfo from '../../components/LabInfo.jsx'
import Layout from '../../components/layout/Layout.jsx'

const lab = [
  { title: 'JavaScript Loops Lab', task:'Create interactive loops using for, 
                while, and for Each methods. Implement counter 
                functionality and array manipulation techniques.' , deadline: '/avatars/alice.jpg', points: 1200 },
  { name: 'Bob Smith', points: 950, profilePic: '/avatars/bob.jpg' },
  { name: 'Clara Lee', points: 870, profilePic: '/avatars/clara.jpg' }
];
function SubmitLab() {
  return (
    <Layout>

    </Layout>
  )
}

export default SubmitLab