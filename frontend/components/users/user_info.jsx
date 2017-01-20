import React from 'react';
import { Link, hashHistory } from 'react-router';


const createPost = () => {
  const url = `/posts/new`;
  hashHistory.push(url);
};

const createButton = () => {
  const url = `/posts/new`;
  hashHistory.push(url);
};


const UserInfo = ( {user, receiveTrack} ) => (
  <div className="user-info-container">
    <img className="info-play"
      src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"
      onClick={()=> (receiveTrack(user.posts[user.posts.length - 1]))}/>
     <div className="parent">
      <img className="image1" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484542366/record-mockup-8_kmpmyz.jpg" />
      <img className="image2" src={user.posts[user.posts.length-1].cover_url}/>
    </div>
    <div className="user-info-box">
      <h1 className="user-name-info">{user.username}</h1>
      <button className="add-button" onClick={createPost}>
        <img className="add-post-button" src="http://www.free-icons-download.net/images/add-button-icon-73846.png"/>
      </button>
      <h1 className="user-song-info">{user.posts[user.posts.length -1].title}</h1>
      <h3 className="user-song-info">{user.posts[user.posts.length -1].artist}</h3>
    </div>
  </div>
);

export default UserInfo;
