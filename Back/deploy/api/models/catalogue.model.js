module.exports = (sequelize, Sequelize) => {
  const Catalogue = sequelize.define("catalogue", {
    nom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    prix: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    image_url: {
      type: Sequelize.STRING,
    },
  });

  return Catalogue;
};
