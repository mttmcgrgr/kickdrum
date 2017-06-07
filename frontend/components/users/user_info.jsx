import React from 'react';
import { Link, hashHistory } from 'react-router';


class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.createPost = this.createPost.bind(this);
    this.featuredPost = this.featuredPost.bind(this);
    this.userInfo = this.userInfo.bind(this);
  }

  handleDelete() {
     this.props.deletePost(this.props.post.id);
     this.props.fetchUser(this.props.post.user_id);
   }

  createPost() {
     const url = `/posts/new`;
     hashHistory.push(url);
   }

   featuredPost() {
     const { post, user, receiveTrack} = this.props;

     if(user.posts.length === 0){
       return(
          <div className="parent">
           <img className="image1" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484542366/record-mockup-8_kmpmyz.jpg" />
           <img className="image2" src="http://res.cloudinary.com/dccshngpp/image/upload/v1496796665/12-Vinyl-LP-Record-4_e9nbgk.png"/>
          </div>
       )
     } else {
       return(
        <div className="featured">
           <img className="info-play"
             src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"
             onClick={()=> (receiveTrack(recentPost))}/>
            <div className="parent">
             <img className="image1" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484542366/record-mockup-8_kmpmyz.jpg" />
             <img className="image2" src={post.cover_url}/>
           </div>
         </div>
       )
     }
   }

   userInfo(){
     const { post, user, deletePost, currentUser} = this.props;
     if(user.posts.length === 0){
       return(
         <div className="user-info-box">
           <h1 className="user-name-info">{user.username}</h1>
           <img className="user_photo" src={user.photo_url}/>
           <button className="add-button" onClick={this.createPost}>
             <img className="add-post-button" src="http://res.cloudinary.com/dccshngpp/image/upload/v1487813182/button_create_ldioq7.png"/>
           </button>
           <h1 className="user-song-info">{post.title}</h1>
           <h3 className="user-song-info">{post.artist}</h3>
           <img className="info-bookmark" src="http://res.cloudinary.com/dccshngpp/image/upload/v1487967562/bookmark-outline_318-73546_soguwg.jpg"/>
         </div>
       )
     } else {
       return(
         <div className="user-info-box">
           <h1 className="user-name-info">{user.username}</h1>
           <img className="user_photo" src={user.photo_url}/>
           <button className="add-button" onClick={this.createPost}>
             <img className="add-post-button" src="http://res.cloudinary.com/dccshngpp/image/upload/v1487813182/button_create_ldioq7.png"/>
           </button>
           <h1 className="user-song-info">{post.title}</h1>
           <h3 className="user-song-info">{post.artist}</h3>
           <img className="info-bookmark" src="http://res.cloudinary.com/dccshngpp/image/upload/v1487967562/bookmark-outline_318-73546_soguwg.jpg"/>
         </div>

       )

     }




   }

  render(){
    const { post, user, currentUser, deletePost, receiveTrack} = this.props;

    let recentPost = post;
    if(user.posts.length === 0){
       recentPost = {
        cover_url: "http://res.cloudinary.com/dccshngpp/image/upload/v1496796665/12-Vinyl-LP-Record-4_e9nbgk.png",
        song_url: "",
        title: "Add your first post!",
        artist: ""
      };
    } else {
      recentPost = post;
    }

    if(currentUser.username === user.username){
      return (
        <div className="user-info-container">
          {this.featuredPost()}

          <div className="user-info-box">
            <h1 className="user-name-info">{currentUser.username}</h1>
            <img className="user_photo" src={currentUser.photo_url}/>
            <button className="add-button" onClick={this.createPost}>
              <img className="add-post-button" src="http://res.cloudinary.com/dccshngpp/image/upload/v1487813182/button_create_ldioq7.png"/>
            </button>
            <h1 className="user-song-info">{recentPost.title}</h1>
            <h3 className="user-song-info">{recentPost.artist}</h3>
            <img className="info-bookmark" src="http://res.cloudinary.com/dccshngpp/image/upload/v1487967562/bookmark-outline_318-73546_soguwg.jpg"/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="user-info-container">
          {this.featuredPost()}

          <div className="user-info-box">
            <h1 className="user-name-info">{user.username}</h1>
            <h1 className="user-song-info">{recentPost.title}</h1>
            <h3 className="user-song-info">{recentPost.artist}</h3>
            <img className="info-bookmark" src="http://res.cloudinary.com/dccshngpp/image/upload/v1487967562/bookmark-outline_318-73546_soguwg.jpg"/>
          </div>
        </div>
      );
    }
  }

}

// <button className="delete-button" onClick={this.handleDelete}>
//   <img className="delete-button" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484637568/delete-button_318-77600_nd5tdo.jpg" />
// </button>


export default UserInfo;
