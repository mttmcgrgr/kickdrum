import React from 'react';
import { fetchUserPosts, deletePost } from '../../actions/post_actions';


const playSong = (post) => {
  var audio = new Audio(post.song_url);
  audio.play();
};



const HomeFeedItem = ( {post, receiveTrack} ) => (
  <li className="session_main" key={post.id}>
      <div className="container">
        <img className="session_image" src={post.cover_url}/>
          <div className="middle">
            <img className="play" onClick={()=> (receiveTrack(post))} src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"/>
         </div>
     </div>
  </li>
);

export default HomeFeedItem;
