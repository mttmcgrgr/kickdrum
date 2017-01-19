import React from 'react';
import { Link, hashHistory } from 'react-router';





const PostIndexItem = ( {post, receiveTrack} ) => (

  <li className="li-post-index">
    <section className="post_header">
    <Link to={`/users/${post.user_id}`}>{post.username}</Link>
    </section>
    <section>
      <div className="container">
        <img className="image" src={post.cover_url}/>
          <div className="middle">
            <img className="play" onClick={()=> (receiveTrack(post))} src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"/>
         </div>
     </div>
    </section>
    <section className="post_footer">
      <div className="footer_text">{post.title}</div>
      <div className="footer_artist">{post.artist}</div>
    </section>
  </li>
);

export default PostIndexItem;
