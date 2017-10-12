import React from 'react';
import { fetchUserPosts, deletePost } from '../../actions/post_actions';


const HomeFeedItem = ( {post, receiveTrack} ) => (
  <li className="session_main" key={post.id}>
      <div className="container">
        <img className="session_image" src={post.cover_url}/>
          <div className="middle">
            <img className="session-play" onClick={()=> (receiveTrack(post))}
              src="http://res.cloudinary.com/dccshngpp/image/upload/v1497308572/play-rounded-flat_kgtguy.png"/>
         </div>
     </div>
  </li>
);

export default HomeFeedItem;
