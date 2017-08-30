import React from 'react';
import ListIndexItem from './list_index_item';
import GridFeed from './grid_feed';
import Loading from 'react-loading-animation';
import AOS from 'aos';



class PostIndex extends React.Component {
  constructor(props){
    super(props);
    AOS.init({
     duration: 300
    });
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

  componentWillReceiveProps (){
    AOS.refresh();
  }

  componentDidMount(){
    setTimeout(() => {]
    this.setState({loading: false}); }, 75);
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
    const { posts, currentUser, receiveTrack, createBookmark, deleteBookmark } = this.props;
    if(this.state.listView === true){
      return(
        <div className="post-feed-list">
          <ul className="post_content_main">
            {posts.map(post => (
              <ListIndexItem
                key={post.id}
                post={post}
                currentUser={currentUser}
                receiveTrack={receiveTrack}
                createBookmark={createBookmark}
                deleteBookmark={deleteBookmark} />
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
            currentUser={this.props.currentUser}
            receiveTrack={this.props.receiveTrack}
            deletePost={this.props.deletePost}
            createBookmark={this.props.createBookmark}
            deleteBookmark={this.props.deleteBookmark}
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
          <div className="item item--primary"
            data-aos="fade-left"
            data-aos-anchor="#trigger-right">
            {this.viewButton()}
          </div>
          <div className="aos-trigger" id="trigger-right"></div>
            {this.renderViewType()}
        </div>

      );
    }
  }
}

export default PostIndex;
