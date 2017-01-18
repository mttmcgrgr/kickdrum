import React from 'react';
import UserIndexItem from './user_index_item';


class UserFeed extends React.Component {



  render () {
    const posts = [...this.props.user.posts];
    posts.shift();
    posts.reverse();

    console.log(posts);
    return (

      <div className="user-feed-container">
        {posts.map(post => (
          <UserIndexItem post={post} key={post.id} />
        ))}
      </div>
    );
  }
}

export default UserFeed;
