const { v4: uuidv4 } = require("uuid");
const { ACCESS_TOKEN_SECRET } = require("../config.js");
const jwt = require('jsonwebtoken');
const db = require("../models");
const Catalogue = db.catalogue;
const Op = db.Sequelize.Op;

exports.getCatalogue = async (req, res) => {
  try {
    const catalogueItems = await Catalogue.findAll();
    res.json(catalogueItems);
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving catalogue items: " + error.message
    });
  }
};
