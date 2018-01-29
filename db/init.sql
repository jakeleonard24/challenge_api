create table users 
( id serial primary key,
  email varchar,
  username varchar,
  picture varchar,
  bio text,
  auth_id varchar
)

create table followers
( id serial primary key,
  user_id integer references users(id),
  follower_id integer references users(id)
)

create table badges
( id serial primary key,
  user_id integer references users(id),
  creator_id integer references users(id),
  logo varchar,
  title varchar,
  description varchar,
  badge_content varchar,
  likes integer
)