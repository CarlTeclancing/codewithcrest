import React from 'react'
import Layout from '../../components/layout/Layout'
function Assistant() {
  return (
    <Layout>
        <div className="assistant">
            <h1>How Can I assist you today?</h1>
            <p className='p'>Tap a suggestion below or write your own query</p>
            <div className="assist">
                <span className='p'>Suggestion</span>
                <div className="box-suggest">
                    <div className="suggest">
                        <span>Web Dev</span>
                    </div>
                    <div className="suggest">
                        <span>Algorithm</span>
                    </div>
                    <div className="suggest">
                        <span>Cloud</span>
                    </div>
                    <div className="suggest">
                        <span>Database</span>
                    </div>
                    <div className="suggest">
                        <span>Mobile</span>
                    </div>
                    <div className="suggest">
                        <span>System Design</span>
                    </div>
                </div>
            </div>

            <form action="">
                <textarea name="" id="" placeholder='Ask anything...'></textarea>
            </form>
        </div>

    </Layout>
  )
}

export default Assistant