

export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `api/user/${id}`
  })
);


export const deleteUser = id => (
  $.ajax({
    url: `api/user/${id}`,
    method: 'DELETE'
  })
);
