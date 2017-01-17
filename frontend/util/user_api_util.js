

export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);


export const deleteUser = id => (
  $.ajax({
    url: `api/users/${id}`,
    method: 'DELETE'
  })
);
