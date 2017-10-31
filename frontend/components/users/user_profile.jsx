import React from 'react';
import GridFeed from '../posts/grid_feed';
import UserInfo from './user_info';
import Loading from 'react-loading-animation';


class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.userId);
    window.scrollTo(0,0);
    setTimeout(() => {
    this.setState({loading: false}); }, 75);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.userId !== nextProps.params.userId){
      this.props.fetchUser(nextProps.params.userId);
      setTimeout(() => {
      this.setState({loading: false}); }, 75);
    }
  }


  render () {
    const { posts, currentUser } = this.props;
    const featuredPost = posts[posts.length - 1];
    const otherPosts = posts.slice(1);

    if(this.state.loading === true) {
      return null
    } else {
      return (
          <div className="user-profile">
            <UserInfo
              currentUser={currentUser}
              post={featuredPost}
              user={this.props.user}
              createBookmark={this.props.createBookmark}
              deleteBookmark={this.props.deleteBookmark}
              receiveTrack={this.props.receiveTrack}
              deletePost={this.props.deletePost}
              fetchUser={this.props.fetchUser}/>

            <div>
              <GridFeed
                posts={otherPosts}
                currentUser={currentUser}
                profileFeed={true}
                user={this.props.user}
                createBookmark={this.props.createBookmark}
                deleteBookmark={this.props.deleteBookmark}
                receiveTrack={this.props.receiveTrack}
                deletePost={this.props.deletePost}
                fetchUser={this.props.fetchUser}/>
            </div>
          </div>
      );
    }
  }
}



export default UserProfile;
