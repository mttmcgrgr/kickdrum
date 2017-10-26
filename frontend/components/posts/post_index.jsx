import React from 'react';
import ListIndexItem from './list_index_item';
import GridFeed from './grid_feed';
import Loading from 'react-loading-animation';
import AOS from 'aos';

class PostIndex extends React.Component {
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

  componentWillReceiveProps (){
    AOS.refresh();
  }

  componentDidMount(){
    setTimeout(() => {
    this.setState({loading: false}); }, 10 );
  }

  changeView(){
    this.setState({listView: !this.state.listView})
  }

  viewButton(){
    const listImg = "http://res.cloudinary.com/dccshngpp/image/upload/v1497036970/arq-grid-512_ogad8x.png"
    const gridImg = "http://res.cloudinary.com/dccshngpp/image/upload/v1497036973/Unknown_tdfah8.png"
    let imgSrc = this.state.listView ? listImg : gridImg;

    return(
      <button className="view-button" onClick={this.changeView}>
        <img
          className="change-view-button"
          src={imgSrc}
          />
      </button>
    )
  }


  renderViewType(){
    const { posts, currentUser, receiveTrack, createBookmark, deleteBookmark } = this.props;

    if( posts.length === 0 ){
      return null
    }

    if(this.state.listView === true){
      return(
        <div className="post-feed-list">
          <ul className="post_content_main">
            {posts.map(( post, idx )=> (
              <ListIndexItem
                key={idx}
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
        <div className="post-grid-content">
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
        <div className="post-loading">
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

export default PostIndex;

/*
AOS.init({
 duration: 200
});
*/
