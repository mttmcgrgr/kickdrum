export const createBookmark = ( post_id, user_id ) => (
    $.ajax({
    method: "POST",
    url: "/api/bookmarks",
    data: { bookmark: { post_id, user_id } }
    })
);

export const deleteBookmark = ( post_id, user_id ) => (
    $.ajax({
    method: "DELETE",
    url: `/api/bookmarks/${user_id}`,
    data: { bookmark: { post_id, user_id } }
  })
);
