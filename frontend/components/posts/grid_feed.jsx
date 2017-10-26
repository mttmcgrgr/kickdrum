import React from 'react';
import GridIndexItem from './grid_index_item';


class GridFeed extends React.Component {

  render () {
    const posts = [...this.props.posts];
    const currentUser = this.props.currentUser;

    if (posts.length === 0) {
      return (
        <div className="sticky-note-add">
          
        </div>
      )
    } else {
    return (
      <div className="post-feed-container">
        <div className="home-posts">
        {posts.map(post => (
          <GridIndexItem
            currentUser={this.props.currentUser}
            user={this.props.user}
            post={post}
            profileFeed={this.props.profileFeed}
            receiveTrack={this.props.receiveTrack}
            deletePost={this.props.deletePost}
            fetchUser={this.props.fetchUser}
            key={post.id} />
        ))}
        </div>
      </div>
    );
   }
  }
}

export default GridFeed;
