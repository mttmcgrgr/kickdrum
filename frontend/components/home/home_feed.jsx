import React from 'react';
import HomeFeedItem from './home_feed_item';
import Loading from 'react-loading-animation';


class HomeFeed extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchPosts();
    setTimeout(() => {
    this.setState({loading: false}); }, 10);
  }

  render () {
    const posts = [...this.props.posts]

    if(this.state.loading) {
      return(
        <div className="loading">
          <Loading />
        </div>
      )
    } else {
      return (
        <div className="session-feed-container">
          {posts.map(post => (
            <HomeFeedItem post={post} receiveTrack={this.props.receiveTrack} key={post.id} />
          ))}
        </div>
      );
    }
  }
}

export default HomeFeed;
