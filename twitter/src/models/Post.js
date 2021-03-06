import { Sequelize, Model } from "sequelize";

class Post extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        writer: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Post",
        tableName: "posts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      },
    );
  }
  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: "Poster", tarkgetKey: "id" });
  }
}
export default Post;
