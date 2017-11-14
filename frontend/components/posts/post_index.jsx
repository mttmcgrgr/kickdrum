import React from 'react';
import ListIndexItem from './list_index_item';
import GridFeed from './grid_feed';
import Loading from 'react-loading-animation';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
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
    this.setState({loading: false}); }, 20 );
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
        <img className="change-view-button" src={imgSrc} />
      </button>
    )
  }


  renderViewType(){
    const { posts, user, currentUser, receiveTrack, createBookmark, deleteBookmark } = this.props;

    if( posts.length === 0 ){
      return null

    } else {
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
              posts={posts}
              user={user}
              profileView={false}
              currentUser={currentUser}
              receiveTrack={receiveTrack}
              createBookmark={createBookmark}
              deleteBookmark={deleteBookmark} />
          </div>
        )
      }
    }
  }


  render () {
    if(this.state.loading) {
      return(
        <div className="post-loading">
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
