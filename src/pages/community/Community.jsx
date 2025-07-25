import React from 'react'
import './community.css'
import { Link } from 'react-router-dom'
import Img1 from '../../assets/img1.jpg'
import Layout from '../../components/layout/Layout.jsx'

function Community() {
  return (
    <Layout>
        <div className="community-page">
            <div className="left-side">
                <div className="form-post">
                    <div className="firstline">
                        <img src={Img1} alt="" />
                        <h3>Share Your Project</h3>
                    </div>
                    <form action="">
                      <input type="text" placeholder='Project title..'/><br /> <br />
                      <textarea name="" id="" placeholder='Describe your project..'></textarea><br /><br />
                      <span className="hashtags">#Javascript  #HTML  #CSS  #Python</span><br /><br />
                       
                       <div className="bottom">
                        <div className="add">
                            <Link> Image</Link>
                            <Link>Code</Link>
                        </div>
                        <button>Post Project</button>
                       </div>
                    </form>
                </div>
            </div>

            <div className="right-side">
                <div className="form-post">
                    <h3>Trending Topics</h3>
                    <p className="trends">
                        <span className="hashtag">#Javascript</span>  
                        <span>142 posts</span>
                    </p>
                    <p className="trends">
                        <span className="hashtag">#Python</span>  
                        <span>90 posts</span>
                    </p>
                    <p className="trends">
                        <span className="hashtag">#React</span>  
                        <span>76 posts</span>
                    </p>
                    <p className="trends">
                        <span className="hashtag">#WebDev</span>  
                        <span>65 posts</span>
                    </p>
                </div>

                <div className="form-post">
                    <h3>Top Contributors</h3>
                    <div className="top-contributors">
                        <div className="contributors">
                            <img src="" alt="" />
                            <div className="contributor-info">
                                <p className="name">Mike Rodriguez</p>
                                <span className="contributor-point">1,240 points</span>
                            </div>
                        </div>
                        <div className="contributors">
                            <img src="" alt="" />
                            <div className="contributor-info">
                                <p className="name">Emma Wilson</p>
                                <span className="contributor-point">1,180 points</span>
                            </div>
                        </div>
                        <div className="contributors">
                            <img src="" alt="" />
                            <div className="contributor-info">
                                <p className="name">David Kim</p>
                                <span className="contributor-point">1,095 points</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-post">
                    <h3>Suggested Projects</h3>   
                    
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Community