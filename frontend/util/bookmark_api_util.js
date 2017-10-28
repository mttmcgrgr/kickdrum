export const createBookmark = ( post_id ) => (
    $.ajax({
    method: "POST",
    url: "/api/bookmarks",
    data: post_id
    })
);

export const deleteBookmark = ( post_id ) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookmarks/${post_id}`
  });
};
