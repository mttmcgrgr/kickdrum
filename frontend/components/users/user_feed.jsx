import React from 'react';
import UserIndexItem from './user_index_item';


class UserFeed extends React.Component {



  render () {
    const posts = [...this.props.user.posts].slice(0,-1);
  
    posts.reverse();

    return (

      <div className="user-feed-container">
        {posts.map(post => (
          <UserIndexItem
            user={post.user}
            post={post}
            receiveTrack={this.props.receiveTrack}
            deletePost={this.props.deletePost}
            fetchUser={this.props.fetchUser}
            key={post.id} />
        ))}
      </div>
    );
  }
}

export default UserFeed;
