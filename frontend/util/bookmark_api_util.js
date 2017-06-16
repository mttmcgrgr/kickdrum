export const createBookmark = (post_id) => (
    $.ajax({
    method: "POST",
    url: "/api/bookmarks",
    data: {bookmark: { post_id: post_id }}
  })
);

export const deleteBookmark = (post_id) => (
    $.ajax({
    method: "DELETE",
    url: `/api/bookmarks/${post_id}`
  })
);
