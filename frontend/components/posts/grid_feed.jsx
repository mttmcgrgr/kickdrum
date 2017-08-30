import React from 'react';
import GridIndexItem from './grid_index_item';


class GridFeed extends React.Component {

  render () {
    const posts = [...this.props.posts];
    const currentUser = this.props.currentUser;

    if (posts.length === 0) {
      return (
        <div className="sticky-note-add">
          <img
            src="http://res.cloudinary.com/dccshngpp/image/upload/v1496957034/postIt_bWelootsse2253_knhby6.png"
          />
        </div>
      )
    } else {
    return (
      <div className="user-feed-container">
        <div className="user-posts">
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
