import React from 'react';
import UserFeed from './user_feed';
import UserInfo from './user_info';


class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }


  componentWillMount() {
    const user_id = this.props.params.userId;
    this.props.fetchUser(user_id);
  }




  render () {

    return (
      <div className="feed_background">
        <div className="opaque-background">
          <UserInfo user={this.props.user} receiveTrack={this.props.receiveTrack}/>
          <UserFeed user={this.props.user} receiveTrack={this.props.receiveTrack}/>
        </div>
      </div>
    );
  }

}



export default UserProfile;
