import React from 'react';
import HomeFeedItem from './home_feed_item';


class HomeFeed extends React.Component {


  componentDidMount() {
    this.props.fetchPosts();
  }


  render () {
    const posts = [...this.props.posts];


    return (

      <div className="session-feed-container">
        {posts.map(post => (
          <HomeFeedItem post={post} receiveTrack={this.props.receiveTrack} key={post.id} />
        ))}
      </div>
    );
  }
}

export default HomeFeed;
