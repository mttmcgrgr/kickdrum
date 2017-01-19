import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    const { posts } = this.props;


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
