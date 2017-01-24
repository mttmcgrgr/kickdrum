import React from 'react';
import UserFeed from './user_feed';
import UserInfo from './user_info';


class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount() {
    const user_id = this.props.params.userId;
    this.props.fetchUser(user_id);
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.userId !== nextProps.params.userId){
      this.props.fetchUser(nextProps.params.userId);
    }
  }



  render () {
    let userPosts = [...this.props.user.posts];
    let recentPost = userPosts.pop();
    let otherPosts = userPosts.reverse();

    const currentUser = this.props.currentUser;
    return (
        <div className="user-profile">
          <UserInfo
            currentUser={currentUser}
            post={recentPost}
            user={this.props.user}
            receiveTrack={this.props.receiveTrack}
            deletePost={this.props.deletePost}
            fetchUser={this.props.fetchUser}/>

          <UserFeed
            posts={otherPosts}
            currentUser={currentUser}
            user={this.props.user}
            receiveTrack={this.props.receiveTrack}
            deletePost={this.props.deletePost}
            fetchUser={this.props.fetchUser}/>
        </div>

    );
  }

}



export default UserProfile;
