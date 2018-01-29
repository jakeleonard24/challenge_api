SELECT badges.id as uniquebadgeid, users.id as uniqueuserid, badges.creatorid, badges.content, badges.title, badges.logo, users.username, users.picture, badges.description, badges.type, badges.likes, badges.origin_id
FROM followers
JOIN badges on followers.follower_id = badges.userid
JOIN users on followers.follower_id = users.id
WHERE user_id = $1;