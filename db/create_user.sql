insert into users(email, username, firebase_id)
values ($1, $2, $3)
RETURNING *;