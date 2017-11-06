import React from 'react';
import GridFeed from '../posts/grid_feed';
import UserInfo from './user_info';
import Loading from 'react-loading-animation';


class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      fetching: false,
      savedView: false
    }

    this.setPostView = this.setPostView.bind(this);
    this.setSavedView = this.setSavedView.bind(this);
  }


  componentDidMount() {
    this.setState({loading: true},
      () => this.props.fetchUser(this.props.params.userId)
      .then(this.setState({ loading: false })));
    window.scrollTo(0,0)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.userId !== nextProps.params.userId){
      this.setState({loading: true},
        () => this.props.fetchUser(nextProps.params.userId)
        .then(this.setState({ loading: false })));
    }
    window.scrollTo(0,0)
  }

  setPostView(){
    if(this.state.savedView){
      this.setState({fetching: true},
        () => this.props.fetchUser(this.props.params.userId)
        .then(this.setState({ fetching: false, savedView: false })));
    } else {
      this.setState({fetching: true},
        () => this.props.fetchUser(this.props.params.userId)
        .then(this.setState({ fetching: false })));
    }
  }

  setSavedView(){
    if(!this.state.savedView){
      this.setState({fetching: true},
        () => this.props.fetchUser(this.props.params.userId)
        .then(this.setState({ fetching: false, savedView: true })));
    } else {
      this.setState({fetching: true},
        () => this.props.fetchUser(this.props.params.userId)
        .then(this.setState({ fetching: false })));
    }
  }


  render () {
    const { posts, currentUser, user, user_bookmarks } = this.props;
    const defaultPost = { cover_url: "https://tinyurl.com/y9kttyfx" };
    const featuredPost = user.posts ? posts[0] : defaultPost;
    const userPosts = posts.slice(1)

    if(this.state.loading){
      return (
        <Loading />
      );
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
                 <div className="view-count">{posts.length}</div>
                 <div className="view-text">POSTS</div>
                </button>
                <button
                  onClick={this.setSavedView}
                  className={this.state.savedView ? "selected-button" : "profile-button"}>
                  <div className="view-count">{user_bookmarks.length}</div>
                  <div className="view-text"> SAVED</div>
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
