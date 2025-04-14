import React from "react";
import "./VideoList.css";

const videos = [
  {
    id: 1,
    title: "React Router Dom",
    description: "Learn to use react router in your application",
    liked: true,
    thumbnailColor: "blue",
  },
  {
    id: 2,
    title: "Contex API in React",
    description: "Learn to manipulate large data in react js",
    liked: true,
    thumbnailColor: "purple",
  },
  {
    id: 3,
    title: "Master React Hooks",
    description: "Learn how to use useState, UseContext, UseEffect etc in react js",
    liked: false,
    thumbnailColor: "green",
  },
];

const VideoList = () => {
  return (
    <div className="video-container">
      <h2>3 Videos</h2>
      {videos.map((video) => (
        <div className="video-item" key={video.id}>
          <div className={`thumbnail ${video.thumbnailColor}`}>
            <span className="play-button">▶</span>
          </div>
          <div className="video-details">
            <strong>{video.title}</strong>
            <p>{video.description}</p>
          </div>
          <div className="like-button">
            {video.liked ? "❤️" : "🤍"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
