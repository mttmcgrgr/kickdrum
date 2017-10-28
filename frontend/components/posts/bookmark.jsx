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
     const { post, createBookmark, deleteBookmark } = this.props;
  
     if ( this.state.marked ) {
       deleteBookmark( post.id )
       this.setState({ marked: !this.state.marked })
       console.log(post);
     } else {
       createBookmark( {bookmark: {post_id: post.id} })
       this.setState({ marked: !this.state.marked })
       console.log(post);
     }
   }


  render() {
    const marked = "https://tinyurl.com/yck6res4"
    const unmarked = "https://tinyurl.com/yafhbe66"

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
