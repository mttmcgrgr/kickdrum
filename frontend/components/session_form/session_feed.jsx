import React from 'react';
import SessionFeedItem from './session_feed_item';


class SessionFeed extends React.Component {


  componentDidMount() {
    this.props.fetchPosts();
  }



  render () {
    const posts = [...this.props.posts].reverse();


    return (

      <div className="session-feed-container">
        {posts.map(post => (
          <SessionFeedItem post={post} receiveTrack={this.props.receiveTrack} key={post.id} />
        ))}
      </div>
    );
  }
}

export default SessionFeed;
