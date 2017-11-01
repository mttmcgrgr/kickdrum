json.partial! 'api/users/user', user: @user

@bookmarks.each do |bookmark|
  json.user_bookmarks do
    json.set! bookmark.id do
      json.id bookmark.id
      json.user_id bookmark.user_id
      json.post_id bookmark.post_id
      json.post bookmark.post
    end
  end
end

@posts.each do |post|
  json.posts do
      json.set! post.id do

        hasMarked = post.bookmarks.any? do |bookmark|
          bookmark.user_id == current_user.id
        end

        json.id post.id
        json.title post.title
        json.artist post.artist
        json.cover_url post.cover_url
        json.song_url post.song_url
        json.username post.user.username
        json.user_id post.user_id
        json.user_photo_url post.user.photo_url
        json.bookmarks post.bookmarks
        json.bookmarkCount post.bookmarks.size
        json.hasMarked hasMarked
        json.created_at post.created_at
      end
    end
end
