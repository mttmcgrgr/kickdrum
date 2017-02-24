import React from 'react';
import { Link } from 'react-router';


const PostIndexItem = ( {post, receiveTrack} ) => {
  return (
  <li className="li-post-index">
    <section className="post_header">
    <Link to={`/users/${post.user_id}`}>{post.username}</Link>
    </section>
    <section>
      <div className="container">
        <img className="image" src={post.cover_url}/>
          <div className="middle">
            <img
              className="play"
              onClick={()=> (receiveTrack(post))}
              src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"
            />
         </div>
     </div>
    </section>
    <section className="post_footer">
      <img className="bookmark" src="http://res.cloudinary.com/dccshngpp/image/upload/v1487967562/bookmark-outline_318-73546_soguwg.jpg"/>
      <div className="post_footer_title">{post.title}</div>
      <div className="post_footer_artist">{post.artist}</div>
    </section>
  </li>
 );
};

export default PostIndexItem;
