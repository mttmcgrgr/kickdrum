import React from 'react';
import { Link, hashHistory } from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     title:'',
     artist:'',
     cover_url: '',
     song_url: '',
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

  renderErrors() {
		return(
			<ul className="errors">
				{this.props.errors.map((error, i) => (
					<li className="errors"  key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
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
        theme: 'white',
        show_powered_by: false,
        multiple: false,
        stylesheet: null,
        sources: ["local", "url"],
        client_allowed_formats: ["mp3","m4a"],
        text: {
          "sources.url.note": "Public URL of an .mp3 or .m4a file:",
          "sources.local.drop_file": "Drop .mp3 or .m4a file here",
          "sources.local.drop_or": "Or",
          "sources.local.select_file": "Select Song",
        }
      },
      (errors, songInfo) => {
        if (errors === null) {
          let song_info = songInfo[0].url;
          this.setState({
            song_url: song_info,
            song_uploaded: true
          });
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
        theme: 'white',
        show_powered_by: false,
        multiple: false,
        button_caption: "Upload Covert Art",
        sources: ["local", "url", "image_search"],
        client_allowed_formats: ["jpeg"],
        text: {
          "sources.url.note": "Public URL of a .jpg image:",
          "sources.local.drop_file": "Drop .jpg  file here",
          "sources.local.drop_or": "Or",
          "sources.local.select_file": "Select JPEG",
        }
      },
      (errors, coverInfo) => {
        if (errors === null) {
          let cover_info = coverInfo[0].url;
          this.setState({
            cover_url: cover_info,
            cover_uploaded: true
          });
        }
      }
    );
  }

  render () {
    let successImg = 'http://res.cloudinary.com/dccshngpp/image/upload/v1508350086/Green_check_iob46m.png'
    let errorImg =  'http://res.cloudinary.com/dccshngpp/image/upload/v1508350082/768px-Red_X.svg_dggd8h.png'
    let songStatus = this.state.song_uploaded ? successImg : errorImg;
    let artStatus = this.state.cover_uploaded ? successImg : errorImg;;
    console.log(this.state);
    return (
    <div className="feed_background">
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="create-form-box">
          <h3 className="create-title">Create Post</h3>

          {this.renderErrors()}

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
          <div className="post-form-buttons">
            <button onClick={this.cloudSong} className="post-button">
              <div className="post-button-left">
                <img className="music-icon" src="https://maxcdn.icons8.com/Share/icon/p1em/Files//audio_file1600.png" />
                <p className="post-button-text">Upload Song</p>
              </div>
              <img className="status-img" src={songStatus} />
            </button>

          </div>
          <br/>
          <div className="post-form-buttons">
            <button onClick={this.cloudArt} className="post-button">
              <div className="post-button-left">
                <img className="art-icon" src="http://img.freepik.com/free-icon/gallery_318-131678.jpg?size=338c&ext=jpg" />
                <p className="post-button-text">Upload Cover Art</p>
              </div>
              <img className="status-img" src={artStatus} />
            </button>

          </div>
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
