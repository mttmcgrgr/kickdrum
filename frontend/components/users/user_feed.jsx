import React from 'react';
import UserIndexItem from './user_index_item';


class UserFeed extends React.Component {



  render () {
    const posts = [...this.props.posts];
    const currentUser = this.props.currentUser;

    return (
      <div className="user-feed-container">
        <div className="user-posts">
        {posts.map(post => (
          <UserIndexItem
            currentUser={this.props.currentUser}
            user={this.props.user}
            post={post}
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

export default UserFeed;
