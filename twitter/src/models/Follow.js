import Sequelize from sequelize;
import User from "./User";

module.exports = class Follow extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        followingId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: User,
            key: "id",
          },
        },
        followerId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: User,
            key: "id",
          },
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Follow",
        tableName: "follows",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
