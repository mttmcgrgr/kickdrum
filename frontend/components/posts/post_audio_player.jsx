
const PostAudioPlayer = ({ post }) => (
    <div>
      <audio controls>
        <source src={ post.song_url } type='audio/mpeg'/>
      </audio>
    </div>
);

export default PostAudioPlayer;
