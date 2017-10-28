import React from 'react';

class Bookmark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      marked : this.props.marked
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
    const marked = "https://tinyurl.com/yck6res4"
    const unmarked = "https://tinyurl.com/yafhbe66"
    
    if (this.state.marked === undefined) {
      return null
    } else {
      return (
        <div>
          <img className="bookmark"
            src={this.state.marked ? marked : unmarked}
            onClick={this.handleBookmark}/>
        </div>
      )
    }

  }
}

export default Bookmark;
