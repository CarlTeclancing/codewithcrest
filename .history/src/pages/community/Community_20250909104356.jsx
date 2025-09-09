import React from 'react'
import './community.css'
import { Link } from 'react-router-dom'
import { useState } from "react"
import Img1 from '../../assets/img1.jpg'
import CommunityPost from '../../components/CommunityPost.jsx'
import {Modal} from 'react-responsive-modal'

const posts = [
  { name: 'De Duke Eric', pic: '../../assets/img1.jpg', time:'2 hours ago', title:'Weather App with API Integration', description:'Built a responsive weather app using vanilla JavaScript and OpenWeather API. Features include location detection and 5-day forecast.', hashtags:'#JavaScript #API #WebDev' },
  
];


function Community() {

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [showModal ,setShowModal] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/posts", {  
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
  return (
    <div className='dashboard-container'>

      <PostModal 
        showModal={showModal}
        setShowModal={setShowModal}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <div>
        <button onClick={()=>setShowModal(true)} >Make a Post</button>
      </div>
        <div className="community-page">
            <div className="left-side">
                

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
                    <h3>🔥 Trending Topics</h3>
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
                    <h3>👑 Top Contributors</h3>
                    <div className="top-contributors">
                        <div className="contributors">
                            <img src="" alt="" />
                            <div className="contributor-info">
                                <span className="name">Mike Rodriguez</span>
                                <span className="contributor-point">1,240 points</span>
                            </div>
                        </div>
                        <div className="contributors">
                            <img src="" alt="" />
                            <div className="contributor-info">
                                <span className="name">Emma Wilson</span>
                                <span className="contributor-point">1,180 points</span>
                            </div>
                        </div>
                        <div className="contributors">
                            <img src="" alt="" />
                            <div className="contributor-info">
                                <span className="name">David Kim</span>
                                <span className="contributor-point">1,095 points</span>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>

                <div className="form-post">
                    <h3>💡 Suggested Projects</h3>   
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
    </div>
  )
}

export default Community

const PostModal = ({showModal ,setShowModal ,handleChange ,handleSubmit ,formData}) => {
  return(
    <>
      <Modal open={showModal} onClose={()=>setShowModal(false)}>
        <h2>Post Creation</h2>
        <p>
          <div className="form-post">
            
            <h3 style={{textAlign:'center'}}>Share Post</h3>

            <form onSubmit={handleSubmit}>
              <label htmlFor="">Add Project title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Project title.."
              /><br /> 
              <br />

              <label htmlFor="">Technology Stack</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder=" (e.g., HTML, CSS, React, Node.js)"
              /><br /> 
              <br />
                  
              <label htmlFor="">Add Project description</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Describe your project.."
              ></textarea>
              <br />

              <span className="hashtags">#Javascript  #HTML  #CSS  #Python</span><br /><br /> 
                
                <div className="add">
                  <Link> Image</Link>
                  <Link>Code</Link>
                </div>
                <button style={{}}>Post Project</button>
            </form>
          </div>

        </p>
      </Modal>
    </>
  )
}