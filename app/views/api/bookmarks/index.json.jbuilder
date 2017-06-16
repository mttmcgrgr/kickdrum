@bookmarks.each do |bookmark|
  json.set! bookmark.id do
    json.partial! 'bookmark', bookmark: bookmark
  end
end
