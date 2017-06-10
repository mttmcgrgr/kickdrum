import React from 'react';
import ListIndexItem from './list_index_item';
import GridFeed from './grid_feed';
import Loading from 'react-loading-animation';


class ListIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      listView: true
    }
    this.changeView = this.changeView.bind(this);
    this.viewButton = this.viewButton.bind(this);
    this.renderViewType = this.renderViewType.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentDidMount(){
    setTimeout(() => {
    this.setState({loading: false}); }, 50);
  }

  changeView(){
    this.setState({listView: !this.state.listView})
  }

  viewButton(){
    if(this.state.listView === true) {
      return(
        <button className="view-button" onClick={this.changeView}>
          <img
            className="change-view-button"
            src="http://res.cloudinary.com/dccshngpp/image/upload/v1497036970/arq-grid-512_ogad8x.png"
            />
        </button>
      )
    } else {
      return(
        <button className="view-button" onClick={this.changeView}>
          <img
            className="change-view-button"
            src="http://res.cloudinary.com/dccshngpp/image/upload/v1497036973/Unknown_tdfah8.png"
            />
        </button>
      )
    }
  }


  renderViewType(){
    const { posts } = this.props;

    if(this.state.listView === true){
      return(
        <div className="post-feed-list">
          <ul className="post_content_main">
            {posts.map(post => (
              <ListIndexItem post={post} receiveTrack={this.props.receiveTrack} key={post.id} />
            ))}
          </ul>
        </div>
      )
    } else {
      return(
        <div className="post-feed-grid">
          <GridFeed
            posts={this.props.posts}
            user={this.props.user}
            profileFeed={false}
            receiveTrack={this.props.receiveTrack}
            deletePost={this.props.deletePost}
            fetchUser={this.props.fetchUser}/>
        </div>

      )
    }
  }


  render () {
    if(this.state.loading) {
      return(
        <div className="loading">
          <Loading />
        </div>
      );
    } else {
      return (
        <div >
          <div className="view-button-container">
            {this.viewButton()}
          </div>
            {this.renderViewType()}
        </div>

      );
    }
  }
}

export default ListIndex;
