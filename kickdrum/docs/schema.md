# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
artist      | string    | not null
photo_url   | string    | not null
song_url    | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed


## bookmarks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts), indexed
user_id     | integer   | not null, foreign key (references users), indexed
