import { Sequelize } from "sequelize";
import User from "./User";
import Post from "./Post";
import Follow from "./Follow";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;

db.User = User;
db.Post = Post;
db.Follow = Follow;

User.init(sequelize);
Post.init(sequelize);
Follow.init(sequelize);

User.associate(db);
Post.associate(db);

export default db;
