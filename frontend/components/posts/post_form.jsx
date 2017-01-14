import React from 'react';

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
    this.props.createPost(this.state);
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
      <div>
        <h3>Create Post</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>

          <label>Artist
            <input
              type="text"
              value={this.state.artist}
              onChange={this.update('artist')} />
          </label>

          <button onClick={this.cloudSong}>Add Song</button>

          <button onClick={this.cloudArt}>Add Cover Art</button>

          <input type="submit" value="Create Post" />
        </form>
      </div>
    );
  }
}

export default PostForm;
