import React from 'react';



const playSong = (post) => {
  var audio = new Audio(post.song_url);
  audio.play();
}


const PostIndexItem = ({ post }) => (
  <li className="content_main">
    <section className="post_header">
      // <div className="footer_text"></div>
    </section>
    <section>
      <div className="container">
        <img className="image" src={post.cover_url}/>
          <div className="middle">
            <img className="play" onClick={playSong.bind(null,post)} src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"/>
         </div>
     </div>
    </section>
    <section className="post_footer">
      <div className="footer_text">{post.title}</div>
      <div className="footer_text">{post.artist}</div>
    </section>
  </li>
);

export default PostIndexItem;
