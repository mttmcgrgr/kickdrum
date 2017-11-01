import React from 'react';
import GridFeed from '../posts/grid_feed';
import UserInfo from './user_info';
import Loading from 'react-loading-animation';


class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      fetching: false,
      savedView: false
    }

    this.setPostView = this.setPostView.bind(this);
    this.setSavedView = this.setSavedView.bind(this);
  }


  componentDidMount() {
    this.setState({loading: true},
      () => this.props.fetchUser(this.props.params.userId)
      .then(setTimeout(this.setState({ loading: false }), 75)));
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.userId !== nextProps.params.userId){
      this.setState({loading: true},
        () => this.props.fetchUser(nextProps.params.userId)
        .then(setTimeout(this.setState({ loading: false }), 3000)));
    }
  }

  setPostView(){
    if(this.state.savedView){
      this.setState({fetching: true},
        () => this.props.fetchUser(this.props.params.userId)
        .then(this.setState({ fetching: false, savedView: false })));
    }
  }

  setSavedView(){
    if(!this.state.savedView){
      this.setState({fetching: true},
        () => this.props.fetchUser(this.props.params.userId)
        .then(this.setState({ fetching: false, savedView: true })));
    }
  }


  render () {
    const { posts, currentUser, user, user_bookmarks } = this.props;
    const featuredPost = posts[0];
    const userPosts = posts.slice(1)

    if(this.state.loading) {
      return null
    }

    if(this.props.user.username === "") {
      return null
    } else {
      return (
          <div className="user-profile">
            <UserInfo
              currentUser={currentUser}
              post={featuredPost}
              user={this.props.user}
              profileView={true}
              createBookmark={this.props.createBookmark}
              deleteBookmark={this.props.deleteBookmark}
              receiveTrack={this.props.receiveTrack}
              fetchUser={this.props.fetchUser}
            />
            <div className="profile-line">
              <div className="button-container">
                <button
                  onClick={this.setPostView}
                  className={this.state.savedView ? "profile-button" : "selected-button"}>
                  POSTS
                </button>
                <button
                  onClick={this.setSavedView}
                  className={this.state.savedView ? "selected-button" : "profile-button"}>
                  SAVED
                </button>
              </div>
            </div>
            <div>
              <GridFeed
                posts={this.state.savedView ? user_bookmarks : userPosts}
                currentUser={currentUser}
                profileView={true}
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
