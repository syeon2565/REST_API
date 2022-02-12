import Sequelize from sequelize;

module.exports = class Follow extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        following: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        follower: {
          type: Sequelize.INTEGER,
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
      }
    );
  }
  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: "follower", tarkgetKey: "id" });
  }
};
