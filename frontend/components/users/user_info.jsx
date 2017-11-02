import React from 'react';
import { Link, hashHistory } from 'react-router';
import Loading from 'react-loading-animation';
import Bookmark from '../posts/bookmark';


class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.featuredPost = this.featuredPost.bind(this);
    this.userInfo = this.userInfo.bind(this);
  }

  componentDidMount(){
    setTimeout(() => {
    this.setState({loading: false}); }, 75);
  }


  handleDelete() {
     this.props.deletePost(this.props.post.id);
     this.props.fetchUser(this.props.post.user_id);
   }


   featuredPost() {
     const { post, user, receiveTrack } = this.props;

     if( user.posts === undefined ){
       return(
          <div className="parent">
           <img className="image1"
             src="http://res.cloudinary.com/dccshngpp/image/upload/v1484542366/record-mockup-8_kmpmyz.jpg" />
           <img className="image2"
             src="https://tinyurl.com/y9kttyfx"/>
           <div className="info-play-container"></div>
          </div>
       )
     } else {
       return(
            <div className="parent">
             <img className="image1"
               src="http://res.cloudinary.com/dccshngpp/image/upload/v1484542366/record-mockup-8_kmpmyz.jpg" />
             <img className="image2" src={post.cover_url}/>
             <div className="info-play-container">
               <img className="info-play"
                 src="http://res.cloudinary.com/dccshngpp/image/upload/v1497308572/play-rounded-flat_kgtguy.png"
                 onClick={()=> (receiveTrack(post))}/>
             </div>
           </div>
       )
     }
   }


   userInfo(){
     const { post, user, currentUser, fetchUser } = this.props;

     if(user.posts === undefined){
       return(
         <div className="user-info-box">
           <div className="name-photo-container">
             <img className="user_photo" src={user.photo_url}/>
             <h1 className="user-name-info">{user.username}</h1>
           </div>
            <div className="info-top-section"></div>
         </div>
       )
     } else {
       return(
         <div className="user-info-box">
           <div className="name-photo-container">
             <img className="user_photo" src={user.photo_url}/>
             <h1 className="user-name-info">{user.username}</h1>
           </div>
            <div className="info-top-section"></div>

           <h1 className="user-title-info">{post.title}</h1>
           <h3 className="user-artist-info">{post.artist}</h3>
           <div className="info-bookmark">
             <div className="follows-count">
               {this.props.post.bookmarkCount}
             </div>
             <Bookmark
               post={post}
               fetchUser={fetchUser}
               currentUser={currentUser}
               createBookmark={this.props.createBookmark}
               deleteBookmark={this.props.deleteBookmark}
             />
           </div>
         </div>

       )
     }
   }

  render(){

    if(this.state.loading === true) {
      return(
        <div className="user-info-loading">
        </div>
      )
    } else {
      return (
        <div className="user-info-container">
          {this.featuredPost()}
          {this.userInfo()}
        </div>
      );
    }
   }

}

// <button className="delete-button" onClick={this.handleDelete}>
//   <img className="delete-button" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484637568/delete-button_318-77600_nd5tdo.jpg" />
// </button>


export default UserInfo;
