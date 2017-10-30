
@posts.each do |post|
    json.set! post.id do
      json.id post.id
      json.title post.title
      json.artist post.artist
      json.cover_url post.cover_url
      json.song_url post.song_url
      json.user_photo_url post.user.photo_url
      json.created_at post.created_at
    end
end
