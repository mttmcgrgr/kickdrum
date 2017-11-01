import React from 'react';
import GridIndexItem from './grid_index_item';

class GridFeed extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    let posts = [...this.props.posts];
    const { currentUser, profileView, createBookmark, deleteBookmark } = this.props;
    console.log(this.props.posts);
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
