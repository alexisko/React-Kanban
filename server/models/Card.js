module.exports = function(sequelize, DataTypes) {
  let Card = sequelize.define("Card", {
    task: DataTypes.STRING,
    priority: {
      type: DataTypes.ENUM,
      values: ["Low", "Medium", "High"]
    },
    status: {
      type: DataTypes.ENUM,
      values: ["To-Do", "In Progress", "Done"]
    },
    created_by: DataTypes.STRING,
    assigned_to: DataTypes.STRING
  });

  Card.associate = function(models) {
    Card.belongsTo(models.User, {
      foreignKey: {
        name: "user_id",
        allowNull: false
      }
    });
  };

  return Card;
};