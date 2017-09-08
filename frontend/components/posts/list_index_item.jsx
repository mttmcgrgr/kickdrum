import React from 'react';
import { Link } from 'react-router';


class ListIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      refresh: false
    }
    this.bookmarkFunction = this.bookmarkFunction.bind(this);
  }


  isBookmarked(){
    if(this.props.currentUser) {
      let isMarked = this.props.post.bookmarks.find(bookmark => {
        return bookmark.user_id === this.props.currentUser.id;
      });
      let result = isMarked ? true : false;
      return result;
    }
  }

  bookmarkFunction(){
    if(this.isBookmarked()){
      this.props.deleteBookmark(this.props.post.id);
    } else {
      this.props.createBookmark(this.props.post.id);
    }
    this.setState({refresh: !this.state.refresh})

  }

  bookmarkStyle() {
    if (this.isBookmarked()){
      return "http://res.cloudinary.com/dccshngpp/image/upload/v1497505286/blue-bookmark_vtsuka.png";
    } else {
      return "http://res.cloudinary.com/dccshngpp/image/upload/v1487967562/bookmark-outline_318-73546_soguwg.jpg";
    }
  }


 render() {
   const { post, receiveTrack } = this.props;
   const defaultPic = "http://res.cloudinary.com/dccshngpp/image/upload/v1497327009/12-Vinyl-LP-Record-4_e9nbgk_gxlll1_z7ur3d.png"
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

export default ListIndexItem;
