import { Sequelize, Model } from "sequelize";
import Follow from "./Follow";

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      },
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post, { foreignKey: "Poster", sourceKey: "id" });
    models.User.belongsToMany(models.User, {
      through: Follow,
      as: "follower",
      foreignKey: "followingId",
    });
    models.User.belongsToMany(models.User, {
      through: Follow,
      as: "following",
      foreignKey: "followerId",
    });
  }
}
export default User;
