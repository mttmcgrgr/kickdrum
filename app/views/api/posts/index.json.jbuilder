json.array! @posts do |post|
  json.title post.title
  json.artist post.artist
  json.cover_url post.cover_url
  json.song_url post.song_url
  json.user_id post.user_id

  json.user do
    json.username post.user.username
    json.photo_url post.user.photo_url
  end
end
