import React from 'react';
import { Link } from 'react-router';


class PostIndexItem extends React.Component {


 render() {
   const { post, receiveTrack } = this.props;
   const defaultPic = "http://res.cloudinary.com/dccshngpp/image/upload/v1489452204/default_pic.jpg"
   let userPic =  post.user_photo_url  ?  post.user_photo_url : defaultPic;

    return (
      <li className="li-post-index">
        <section className="post_header">
          <img className="post-user-pic" src={userPic} />
          <Link className="post-user-name" to={`/users/${post.user_id}`}>{post.username}</Link>
        </section>
        <section>
          <div className="container">
            <img className="image" src={post.cover_url}/>
              <div className="middle">
                <img
                  className="post-play"
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
    }

};

export default PostIndexItem;
