## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Header
 - Search
 - PostIndex


**PlayerContainer**
  -songPlayer

 **ProfileContainer**
   -ProfileHeader
   -PostsIndex
   -BookmarksIndex
   -NewPost

**PostsContainer**
 - PostsIndex
  - PostIndexItem

  **PostIndex**
   - PostIndexItem
   + bookmarks button
   + post detail

**NewPostContainer**
  -PostForm


**SearchContainer**
 - SearchResults
 - UserIndex


**BookmarksContainer**
 - BookmarksIndex
  + BookmarksIndexItem






## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/search" | "SearchContainer" |
| "/users/:id" | "ProfileContainer" |
| "/users/:id/bookmarks" | "BookmarksContainer" |
| "/users/:id/new-post" | "NewPostContainer" |
