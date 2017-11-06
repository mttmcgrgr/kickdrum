import React from 'react';
import GridIndexItem from './grid_index_item';
import Loading from 'react-loading-animation';

class GridFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    setTimeout(() => {
    this.setState({loading: false}); }, 800);
  }

  render () {
    let posts = [...this.props.posts];
    const { currentUser, profileView, createBookmark, deleteBookmark } = this.props;

    if(this.state.loading) {
      return (
        <Loading/>
      );
    }

    if (posts.length === 0) {
      return (
          <div className="post-feed-container">
            <div className="home-posts">
            </div>
          </div>
      )
    } else {
      return (
        <div className="post-feed-container">
          <div className="home-posts">
          {posts.map(post => (
            <GridIndexItem
              key={post.id}
              post={post}
              user={this.props.user}
              currentUser={this.props.currentUser}
              profileFeed={this.props.profileFeed}
              receiveTrack={this.props.receiveTrack}
              fetchUser={this.props.fetchUser}
              createBookmark={createBookmark}
              deleteBookmark={deleteBookmark} />
          ))}
          </div>
        </div>
      );
   }
  }
}

export default GridFeed;
