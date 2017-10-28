import React from 'react';
import GridIndexItem from './grid_index_item';


class GridFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showBookmarks: false
    }
  }

  render () {
    const posts = [...this.props.posts];
    const currentUser = this.props.currentUser;

    if (posts.length === 0) {

      return null
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
              createBookmark={this.props.createBookmark}
              deleteBookmark={this.props.deleteBookmark} />
          ))}
          </div>
        </div>
      );
   }
  }
}

export default GridFeed;
