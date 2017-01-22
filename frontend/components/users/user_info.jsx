import React from 'react';
import { Link, hashHistory } from 'react-router';


const createPost = () => {
  const url = `/posts/new`;
  hashHistory.push(url);
};




const UserInfo = ( { post, user, currentUser, receiveTrack} ) => {

  let recentPost = post;
  if(user.posts.length === 0){
     recentPost = {
      cover_url: "https://res.cloudinary.com/dccshngpp/image/upload/v1484894838/gelbe_Note_jzhs4a.png",
      song_url: "",
      title: "Add your first post!",
      artist: ""
    };
  } else {
    recentPost = post;
  }

  if(currentUser.username === user.username){


    return (

      <div className="user-info-container">
        <img className="info-play"
          src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"
          onClick={()=> (receiveTrack(recentPost))}/>
         <div className="parent">
          <img className="image1" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484542366/record-mockup-8_kmpmyz.jpg" />
          <img className="image2" src={recentPost.cover_url}/>
        </div>

        <div className="user-info-box">
          <h1 className="user-name-info">{currentUser.username}</h1>
          <button className="add-button" onClick={createPost}>
            <img className="add-post-button" src="http://www.free-icons-download.net/images/add-button-icon-73846.png"/>
          </button>
          <h1 className="user-song-info">{recentPost.title}</h1>
          <h3 className="user-song-info">{recentPost.artist}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="user-info-container">
        <img className="info-play"
          src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"
          onClick={()=> (receiveTrack(user.posts[user.posts.length - 1]))}/>
         <div className="parent">
          <img className="image1" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484542366/record-mockup-8_kmpmyz.jpg" />
          <img className="image2" src={user.posts[user.posts.length -1].cover_url}/>
        </div>

        <div className="user-info-box">
          <h1 className="user-name-info">{user.username}</h1>
          <h1 className="user-song-info">{recentPost.title}</h1>
          <h3 className="user-song-info">{recentPost.artist}</h3>
        </div>
      </div>
    );
  }

};

export default UserInfo;
