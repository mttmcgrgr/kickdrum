
json.bookmark do
    json.post @bookmark.post
    json.user_id @bookmark.post.user_id
    json.post_id  @bookmark.post.id
    json.id @bookmark.id
    json.post_bookmarks @bookmark.post.bookmarks

end
