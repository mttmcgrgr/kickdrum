# Kickdrum

[Live link][Live]

[Trello link][trello]

[Live]: http://www.kickdrum.io/
[trello]: https://trello.com/b/2JSmUvDF/kickdrum

## Minimum Viable Product

Kickdrum is a web application inspired by Cymbal.fm built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Images (with playable song links)
- [ ] User pages
- [ ] Post feeds (bookmarked, main, profile)
- [ ] Playing songs with progress bar with continuous play
- [ ] Production README [sample](docs/production_readme.md)
- [ ] Bookmarking of songs (bonus)
- [ ] Users can search for other users (and possibly by artist) (bonus)



## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Posts Model, API, and components (2 days)

**Objective:** Posts can be created, read and destroyed through
the API.

### Phase 3: Post Index / Feed (2 days)

**Objective:** Post Items make up the Post Index which is rendered as "stream" in feed or a "grid" in profile

### Phase 4: - Song Player with continuous playback (2 days)

**objective:**  Users can play a post's linked audio file which displays an audio player at bottom of page

### Phase 5: Bookmarks (1 day)

**Objective:** Users can bookmark a post, which adds it to their bookmarks feed

### Phase 6: User Search (2 days)

**objective:** Users can search for users by username (possibly add artist search if there's time)
