import React from 'react';
import { Link } from 'react-router';


class PostIndexItem extends React.Component {


 render() {
   const { post, receiveTrack } = this.props;
   const defaultPic = "http://res.cloudinary.com/dccshngpp/image/upload/v1497311661/12-Vinyl-LP-Record-4_e9nbgk_gxlll1.png"
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
                  src="http://res.cloudinary.com/dccshngpp/image/upload/v1497308572/play-rounded-flat_kgtguy.png"
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
