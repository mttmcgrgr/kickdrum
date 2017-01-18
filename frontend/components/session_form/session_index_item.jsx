import React from 'react';
import { fetchUserPosts, deletePost } from '../../actions/post_actions';


const playSong = (post) => {
  var audio = new Audio(post.song_url);
  audio.play();
};


const UserIndexItem = ( {post} ) => (
  <li className="content_main">
      <div className="container">
        <img className="session_image" src={post.cover_url}/>
          <div className="middle">
            <img className="play" onClick={playSong.bind(null, post)} src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"/>
         </div>
     </div>
  </li>
);

export default UserIndexItem;
