import React from 'react';

class Bookmark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      marked : this.props.post.hasMarked
    }
    this.handleBookmark = this.handleBookmark.bind(this);
  }


  handleBookmark(e) {
     e.preventDefault();
     const { createBookmark, deleteBookmark, post } = this.props;
     if ( this.state.marked ) {
      this.setState({marked: false},
        () => deleteBookmark( this.props.post.id ))
     } else {
      this.setState({marked: true},
        () => createBookmark( {bookmark: {post_id: post.id }} ))
     }
   }


  render() {
    const marked = "https://tinyurl.com/y9v2z6b2"
    const unmarked = "https://tinyurl.com/y8pz2wag"

      return (
        <div>
          <img className="bookmark"
            src={this.state.marked ? marked : unmarked}
            onClick={this.handleBookmark}/>
        </div>
      )
    }

}

export default Bookmark;
