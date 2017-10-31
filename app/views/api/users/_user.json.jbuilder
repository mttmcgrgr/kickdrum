
json.posts do
  json.array! user.posts do |post|
    json.id post.id
    json.title post.title
    json.artist post.artist
    json.cover_url post.cover_url
    json.song_url post.song_url
    json.username post.user.username
    json.user_id post.user_id
    json.user_photo_url post.user.photo_url
    json.bookmarks post.bookmarks
    json.created_at post.created_at
  end
end

json.id user.id
json.username user.username
json.photo_url user.photo_url
json.bookmarks user.bookmarks
