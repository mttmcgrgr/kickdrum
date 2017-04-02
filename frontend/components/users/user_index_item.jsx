import React from 'react';
import Modal from 'react-modal';
import modal from '../../util/modal';
import { fetchUser, deletePost } from '../../actions/post_actions';



class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }

  modalOpen() {
    this.setState({modalOpen: true});
  }

  onModalOpen() {
    modal.content.opacity = 100;
		this.props.fetchComments(this.props.post.id);
  }


  modalClose() {
    this.setState({modalOpen: false});
    modal.content.opacity = 0;
  }



  handleDelete() {
     this.props.deletePost(this.props.post.id);
     this.props.fetchUser(this.props.post.user_id);
   }


  render(){
    const { post, receiveTrack, currentUser, user } = this.props;


    if(user.username === currentUser.username){
      return (
        <div className="user_content_main">
          <section>
            <div className="container">
              <img className="user-image" src={post.cover_url} onClick={this.modalOpen}/>
                <div className="middle">
                  <img className="play" onClick={()=> (receiveTrack(post))} src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"/>
               </div>
           </div>
          </section>

          <Modal
            isOpen={this.state.modalOpen}
            onAfterOpen={this.onModalOpen}
            onRequestClose={this.modalClose}
            closeTimeoutMS={10}
            contentLabel="Modal"
            style={modal}>
              <img className="modal-img" src={post.cover_url}/>
            </Modal>

        </div>
      );

    } else {
      return (
        <div className="user_content_main">
          <section>
            <div className="container">
              <img className="user-image" src={post.cover_url}/>
                <div className="middle">
                  <img className="play" onClick={()=> (receiveTrack(post))} src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"/>
               </div>
           </div>
          </section>

        </div>
      );
    }
  }

}

export default UserIndexItem;




///current user

// <section className="user_footer">
//   <div className="user_footer_title">{post.title}</div>
//   <div className="user_footer_artist">{post.artist}</div>
//   <button className="delete-button" onClick={this.handleDelete}>
//     <img className="delete-button" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484637568/delete-button_318-77600_nd5tdo.jpg" />
//   </button>
// </section>


// other user

// <section className="user_footer">
//   <div className="user_footer_title">{post.title}</div>
//   <div className="user_footer_artist">{post.artist}</div>
// </section>
