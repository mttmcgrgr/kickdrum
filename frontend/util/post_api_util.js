export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/posts',
  })
);


export const fetchPost = id => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}`
  })
);


export const fetchUserPosts = id => {
  return $.ajax({
      method: 'GET',
      url: `/api/users/${id}/posts`
  });
};


export const createPost = post => (
  $.ajax({
    url: 'api/posts',
    method: 'POST',
    data: { post }
  })
);


export const deletePost = id => (
  $.ajax({
    url: `api/posts/${id}`,
    method: 'DELETE'
  })
);
