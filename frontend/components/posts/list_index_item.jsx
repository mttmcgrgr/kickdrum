import React from 'react';
import { Link } from 'react-router';
import Bookmark from './bookmark';


class ListIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      refresh: false,
    }
  }


 render() {
   const { post } = this.props;

   if (post === undefined) {
     return null
   } else {
    return (
      <li className="li-post-index">
        <section className="post_header">
          <img className="post-user-pic" src={post.user_photo_url} />
          <Link
            className="post-user-name" to={`/users/${post.user_id}`}>{post.username}</Link>
        </section>
        <section>
          <div className="container">
            <img className="image" src={post.cover_url}/>
              <div className="middle">
                <img
                  className="post-play"
                  onClick={()=> (this.props.receiveTrack(post))}
                  src="http://res.cloudinary.com/dccshngpp/image/upload/v1497308572/play-rounded-flat_kgtguy.png"
                />
             </div>
         </div>
        </section>
        <section className="post_footer">
          <div>
            <div className="post_footer_title">{post.title}</div>
            <div className="post_footer_artist">{post.artist}</div>
          </div>
          <div>
            <Bookmark
            post={post}
            currentUser={this.props.currentUser}
            createBookmark={this.props.createBookmark}
            deleteBookmark={this.props.deleteBookmark}/>
          </div>
        </section>
      </li>
     );
    }
  }
};

export default ListIndexItem;
