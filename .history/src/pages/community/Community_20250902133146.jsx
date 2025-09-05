import React from 'react'
import './community.css'
import { Link } from 'react-router-dom'
import { useState } from "react"
import Img1 from '../../assets/img1.jpg'
import Layout from '../../components/layout/Layout.jsx'
import CommunityPost from '../../components/CommunityPost.jsx'

const posts = [
  { name: 'De Duke Eric', pic: '../../assets/img1.jpg', time:'2 hours ago', title:'Weather App with API Integration', description:'Built a responsive weather app using vanilla JavaScript and OpenWeather API. Features include location detection and 5-day forecast.', hashtags:'#JavaScript #API #WebDev' },
  
];

function ProjectForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/posts", { // <-- replace with your backend URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Post created successfully!");
        console.log(data);
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
};

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

                {posts.map((post, index) => (
                <CommunityPost
                    key={index}
                    name={post.name}
                    Pic={post.pic}
                    time={post.time}
                    title={post.title}
                    description={post.description}
                    code={post.code}
                    hashtags={post.hashtags}                  
                />
                ))}
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
                    <div className="suggestion">
                        <h4>Todo App with Local Storage</h4>
                        <p>Built a task manager using vanilla Js</p>
                        <div className="level">
                            <span className="level-name">Beginner . </span>
                            <span className="level-point">50 points</span><br />
                        </div>
                    </div>
                    <div className="suggestion">
                        <h4>Todo App with Local Storage</h4>
                        <p>Built a task manager using vanilla Js</p>
                        <div className="level">
                            <span className="level-name">Beginner . </span>
                            <span className="level-point">50 points</span><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Community