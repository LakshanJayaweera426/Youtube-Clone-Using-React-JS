import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best youtube channel to learn web development</h3>
      <div className="play-video-info">
        <p>2343 views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            123
          </span>
          <span>
            <img src={dislike} alt="" />3
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Chanal that makes learning easy.</p>
        <p>Subscribe to watch more tutorials on web development</p>
        <hr />
        <h4>34 comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              Advanced Data Representation Models are sophisticated techniques
              used to represent complex data structures and relationships in
              databases, going beyond traditional data modeling approaches.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>333</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              Advanced Data Representation Models are sophisticated techniques
              used to represent complex data structures and relationships in
              databases, going beyond traditional data modeling approaches.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>333</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              Advanced Data Representation Models are sophisticated techniques
              used to represent complex data structures and relationships in
              databases, going beyond traditional data modeling approaches.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>333</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
