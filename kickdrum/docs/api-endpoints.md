API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:userId/`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

## Posts

- `GET /api/posts`
  - posts index
- `POST /api/posts`
  - requires all params from post form
-  `GET /api/posts/:id`
    -returns user's posts
    -returns user's bookmarked posts
- `DELETE /api/posts/:id`
