import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    const { posts } = this.props;
    return (
      <div className="feed_background">
        <ul className="opaque-background">
          {posts.map(post => (
            <PostIndexItem post={post} key={post.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostIndex;
