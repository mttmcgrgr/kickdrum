export const createBookmark = ( bookmark ) => (
    $.ajax({
    method: "POST",
    url: "/api/bookmarks",
    data: bookmark
    })
);

export const removeBookmark = ( post_id ) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookmarks/${post_id}`
  });
};
