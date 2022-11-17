import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const url = `https://www.youtube.com/watch?v=${video.id.videoId}`;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
        srcSet=""
      />
      <div className="content">
        <a className="header" href={url}>
          {video.snippet.title}
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
