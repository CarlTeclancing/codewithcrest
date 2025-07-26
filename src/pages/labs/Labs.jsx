import React from 'react'
import Layout from '../../components/layout/Layout'
import Lab from '../../components/Lab';

const Labs = () => {
  return (
    <Layout>
        <h1>Active Lab</h1>
        <Lab />
        <h1>Submitted Labs</h1>
        <Lab />
        <Lab />
        <Lab />
        <Lab />
        <Lab />
    </Layout>
  )
}

export default Labs;
