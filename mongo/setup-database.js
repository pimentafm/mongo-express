db = db.getSiblingDB(process.env.MONGO_INITDB_ROOT_DATABASE)

db.createUser({
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
  roles: [{ role: 'readWrite', db: process.env.MONGO_INITDB_ROOT_DATABASE }],
});

db.createCollection('users')
db.createCollection('user_chat')
db.createCollection('user_profile')
