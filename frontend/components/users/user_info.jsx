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

   createButton(){
     const { user, currentUser } = this.props;
     if(user.username === currentUser.username){
       return(
         <button className="add-button" onClick={this.createPost}>
           <img className="add-post-button" src="http://res.cloudinary.com/dccshngpp/image/upload/v1487813182/button_create_ldioq7.png"/>
         </button>
       )
     } else {
       return(
         ""
       )
     }
   }

   featuredPost() {
     const { post, user, receiveTrack } = this.props;

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
     let defaultPic = "http://res.cloudinary.com/dccshngpp/image/upload/v1489452204/default_pic.jpg"
     let userPic =  user.photo_url  ?  user.photo_url : defaultPic;

     if(user.posts.length === 0){
       return(
         <div className="user-info-box">
           <h1 className="user-name-info">{user.username}</h1>
           <img className="user_photo" src={userPic}/>
           {this.createButton()}
         </div>
       )
     } else {
       return(
         <div className="user-info-box">
           <h1 className="user-name-info">{user.username}</h1>
           <img className="user_photo" src={userPic}/>
           {this.createButton()}
           <h1 className="user-song-info">{post.title}</h1>
           <h3 className="user-song-info">{post.artist}</h3>
           <img className="info-bookmark" src="http://res.cloudinary.com/dccshngpp/image/upload/v1487967562/bookmark-outline_318-73546_soguwg.jpg"/>
         </div>

       )
     }
   }

  render(){

      return (
        <div className="user-info-container">

          {this.featuredPost()}

          {this.userInfo()}
          
        </div>
      );
   }

}

// <button className="delete-button" onClick={this.handleDelete}>
//   <img className="delete-button" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484637568/delete-button_318-77600_nd5tdo.jpg" />
// </button>


export default UserInfo;
