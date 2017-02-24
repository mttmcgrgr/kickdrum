json.array! @posts do |post|
  json.title post.title
  json.artist post.artist
  json.cover_url post.cover_url
  json.song_url post.song_url
  json.user_id post.user_id
  json.username post.user.username
  json.user_photo_url post.user.photo_url
  json.id post.id
  json.created_at post.created_at

end
