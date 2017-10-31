
export const findPostById = (posts, post_id) => {
  for(var i = 0; i < posts.length; i++) {
    var post = posts[i];

    if(post.id === post_id){
      return i;
    }
  }
};



export const getBookmarkPost = (action) => {
   return action.bookmark.bookmark.post;
};

export const getBookmarkIndex = (array, bookmark) => {
  for(var i = 0; i < array.length; i++) {
    var ele = array[i];

    if(ele.id === bookmark.id){
      return i;
    }
  }
};

export const getPostKey = (state, post_id) => {
   const keys = Object.keys(state)

   for(var i = 0; i < keys.length; i++) {
     let key = keys[i];

     if(state[key].id === post_id) {
       return key
     }
   }
};
