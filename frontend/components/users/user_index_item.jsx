import React from 'react';
import { fetchUser, deletePost } from '../../actions/post_actions';



class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);

  }


  handleDelete() {

     this.props.deletePost(this.props.post.id);
     this.props.fetchUser(this.props.post.user_id);
   }


  render(){
    const { post, receiveTrack } = this.props;

    return (
      <li className="user_content_main">
        <section>
          <div className="container">
            <img className="user-image" src={post.cover_url}/>
              <div className="middle">
                <img className="play" onClick={()=> (receiveTrack(post))} src="http://res.cloudinary.com/dccshngpp/image/upload/v1484354473/video-play-3-xxl_hzjck2.png"/>
             </div>
         </div>
        </section>

        <section className="user_footer">
          <div className="footer_text">{post.title}</div>
          <div className="footer_artist">{post.artist}</div>
          <button className="delete-button" onClick={this.handleDelete}>
            <img className="delete-button" src="http://res.cloudinary.com/dccshngpp/image/upload/v1484637568/delete-button_318-77600_nd5tdo.jpg" />
          </button>

        </section>
      </li>
    );
  }

}

export default UserIndexItem;
