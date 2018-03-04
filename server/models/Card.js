module.exports = function(sequelize, DataTypes) {
  let Card = sequelize.define("Card", {
    task: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priority: {
      type: DataTypes.ENUM,
      values: ["Low", "Medium", "High"]
    },
    status: {
      type: DataTypes.ENUM,
      values: ["To-Do", "In Progress", "Done"]
    }
  });
};