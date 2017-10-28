json.extract! @bookmark, :id, :user_id, :post_id

json.post_bookmarks @bookmark.post.bookmarks
