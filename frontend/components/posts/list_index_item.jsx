import React from 'react';
import { Link } from 'react-router';
import Bookmark from './bookmark';


class ListIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      refresh: false
    }

  }

  checkIfBookmarked(){
    let { post, currentUser } = this.props;
    let bookmarks = post.bookmarks || []
    let markerIds = bookmarks.map((mark) => {
        return mark.user_id;
    })

    if(markerIds.includes(currentUser.id)) {
      return true
    } else {
      return false
    }
  }


   render() {
     const { post, receiveTrack, createBookmark, deleteBookmark } = this.props;
     let userPic =  post.user_photo_url  ?  post.user_photo_url : "https://tinyurl.com/yccadzmo";

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
            <Bookmark
            post={post}
            createBookmark={createBookmark}
            deleteBookmark={deleteBookmark}
            marked={this.checkIfBookmarked()}/>
            <div className="post_footer_title">{post.title}</div>
            <div className="post_footer_artist">{post.artist}</div>
          </section>
        </li>
       );
      }
};

export default ListIndexItem;
