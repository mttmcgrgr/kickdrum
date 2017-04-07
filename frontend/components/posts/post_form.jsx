import React from 'react';
import { Link, hashHistory } from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     title:'',
     artist:'',
     cover_url:'',
     song_url:'',
     user_id: props.user.id
   };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.update = this.update.bind(this);
  this.cloudSong = this.cloudSong.bind(this);
  this.cloudArt = this.cloudArt.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state).then(() =>
      this.props.router.replace(`/posts`)
      )
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  cloudSong(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: 'dccshngpp',
        upload_preset: 'jvoxzjhw',
        theme: 'minimal',
      },
      (errors, songInfo) => {
        if (errors === null) {
          let song_info = songInfo[0].url;
          this.setState({song_url: song_info});
        }
      }
    );
  }


  cloudArt(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: 'dccshngpp',
        upload_preset: 'jvoxzjhw',
        theme: 'minimal',
      },
      (errors, coverInfo) => {
        if (errors === null) {
          let cover_info = coverInfo[0].url;
          this.setState({cover_url: cover_info});
        }
      }
    );
  }

  render () {
    return (
    <div className="feed_background">
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="create-form-box">
          <h3 className="create-title">Create Post</h3>
          <div className="login-form">
          <br/>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              className="login-input" />
          </label>
           <br/>
          <label>Artist
            <input
              type="text"
              value={this.state.artist}
              onChange={this.update('artist')}
              className="login-input" />
          </label>
          <br/>
          <button onClick={this.cloudSong} className="button">Add Song</button>
          <br/>
          <button onClick={this.cloudArt} className="button">Add Cover Art</button>
          <br/>
          <input type="submit" value="Create Post" className="button" />
         </div>
        </form>
      </div>
     </div>
    );
  }
}

export default PostForm;
