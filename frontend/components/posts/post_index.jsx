import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentWillMount() {
    this.props.fetchPosts();
  }



  render () {
    const { posts } = this.props;

    // let feedPosts = posts.reverse();
    return (
      <div>
        <ul className="post_content_main">
          {posts.map(post => (
            <PostIndexItem post={post} receiveTrack={this.props.receiveTrack} key={post.id} />
          ))}
        </ul>
      </div>

    );
  }
}

export default PostIndex;
