import React from 'react';
import SessionIndexItem from './session_index_item';


class SessionFeed extends React.Component {


  componentDidMount() {
    this.props.fetchPosts();
  }



  render () {
    const posts = [...this.props.posts];


    return (

      <div className="session-feed-container">
        {posts.map(post => (
          <SessionIndexItem post={post} key={post.id} />
        ))}
      </div>
    );
  }
}

export default SessionFeed;
