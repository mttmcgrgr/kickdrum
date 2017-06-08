import React from 'react';
import Modal from 'react-modal';
import ProfileModal from '../../util/profile_modal';
import { fetchUser, deletePost } from '../../actions/post_actions';
import UserInfo from './user_info'


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
    ProfileModal.content.opacity = 100;

  }


  modalClose() {
    this.setState({modalOpen: false});
    ProfileModal.content.opacity = 0;
  }



  handleDelete() {
     this.props.deletePost(this.props.post.id);
     this.props.fetchUser(this.props.post.user_id);
   }


  render(){
    const { post, receiveTrack, currentUser, user } = this.props;

      return (
        <div className="user_content_main">
          <section>
            <div className="container">
              <img className="user-image" src={post.cover_url} onClick={this.modalOpen}/>
                <div className="middle">
                  <img className="play" onClick={()=> (receiveTrack(post))} src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"/>
                  <img className="modal-icon" onClick={this.modalOpen} src="http://res.cloudinary.com/dccshngpp/image/upload/v1496898350/grey-modal_h5lsun.png"/>
               </div>
           </div>
          </section>

          <Modal
            isOpen={this.state.modalOpen}
            onAfterOpen={this.onModalOpen}
            onRequestClose={this.modalClose}
            closeTimeoutMS={10}
            contentLabel="Modal"
            style={ProfileModal}>
              <section>
                <div className="container">
                  <img className="modal-image" src={post.cover_url} onClick={this.modalOpen}/>
                    <div className="middle">
                      <img className="modal-play" onClick={()=> (receiveTrack(post))} src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"/>
                   </div>
               </div>
              </section>
              <section>
                <h1 className="modal-name-info">{currentUser.username}</h1>
                <img className="modal-photo" src={currentUser.photo_url}/>
                <div className="modal-top-section"></div>
                <h1 className="modal-song-info">{post.title}</h1>
                <h3 className="modal-artist-info">{post.artist}</h3>
                <img className="modal-bookmark" src="http://res.cloudinary.com/dccshngpp/image/upload/v1487967562/bookmark-outline_318-73546_soguwg.jpg"/>
              </section>
          </Modal>

        </div>
      );
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
