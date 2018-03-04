module.exports = function(sequelize, DataTypes) {
  let Board = sequelize.define("Board", {
    board_name: DataTypes.STRING
  });

  Board.associate = function(models) {

  };
};