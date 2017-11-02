import React from 'react';


class Bookmark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitting : false
    }
    this.handleBookmark = this.handleBookmark.bind(this);
  }


  handleBookmark(e) {
     e.preventDefault();
     const { post } = this.props;

     if (this.state.submitting) {
        return null;
      } else if (this.props.post.hasMarked) {
        this.setState({submitting: true},
          () => this.props.deleteBookmark(post.id)
          .then(this.setState({ submitting: false })));
      } else {
        this.setState({submitting: true},
         () => this.props.createBookmark({bookmark: {post_id: post.id}})
          .then(this.setState({ submitting: false })));
      }
   }

  render() {
      const marked = "https://tinyurl.com/y9v2z6b2"
      const unmarked = "https://tinyurl.com/y8pz2wag"
  
      if(this.props.post === undefined){
        return null
      } else {
        let markStyle = this.props.post.hasMarked ? marked : unmarked;

        return (
          <img className="bookmark"
            src={markStyle}
            onClick={this.handleBookmark}
          />
        )
      }
    }

}

export default Bookmark;
