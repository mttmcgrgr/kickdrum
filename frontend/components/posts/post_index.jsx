import React from 'react';
import PostIndexItem from './post_index_item';
import Loading from 'react-loading-animation';


class PostIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentDidMount(){
    setTimeout(() => {
    this.setState({loading: false}); }, 50);
  }

  render () {
    const { posts } = this.props;

    if(this.state.loading) {
      return(
        <div className="loading">
          <Loading />
        </div>
      );
    } else {
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
}

export default PostIndex;
