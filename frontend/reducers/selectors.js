
export const allPosts = (state) => {
    return Object.values(state.posts);
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

export const getPostKey = (state, post) => {
 const keys = Object.keys(state)

 for(var i = 0; i < keys.length; i++) {
   let key = keys[i];

   if(state[key].id === post.id) {
     return key
   }
 }
};
