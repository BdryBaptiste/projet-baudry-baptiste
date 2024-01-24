const { ACCESS_TOKEN_SECRET }  = require ("../config.js");

const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
  }

const db = require("../models");
const Utilisateur = db.utilisateur;
const Op = db.Sequelize.Op;

exports.login = (req, res) => {
  const utilisateur = {
    login: req.body.login,
    password: req.body.password
  };

  // Test
  let pattern = /^[A-Za-z0-9]{1,20}$/;
  if (pattern.test(utilisateur.login) && pattern.test(utilisateur.password)) {
     Utilisateur.findOne({ where: { login: utilisateur.login } })
    .then(data => {
      console.log("Pre-data");
      if (data) {
        const user = {
          id: data.id,
          name: data.nom,
          email: data.email
        };

        console.log("Post-data"); 
      
        let accessToken = generateAccessToken(user);
        console.log("Data sending");
        res.setHeader('Authorization', `Bearer ${accessToken}`);
        res.send(data);


      } else {
        res.status(404).send({
          message: `Cannot find Utilisateur with login=${utilisateur.login}.`
        });
      }
    })
    .catch(err => {
      res.status(400).send({
        message: "Error retrieving Utilisateur with login=" + utilisateur.login
      });
    });
  } else {
    res.status(400).send({
      message: "Login ou password incorrect" 
    });
  }
};

exports.create = (req, res) => {
  if (!req.body.login || !req.body.password || !req.body.nom) {
    res.status(400).send({
      message: "User needs a login, password and name"
    });
    return;
  }

  Utilisateur.findOne({
    where: {
      login: req.body.login
    }
  }).then(existingUser => {
    if (existingUser) {
      res.status(400).send({
        message: "Login already in use. Please choose a different login."
      });
      return;
    }

    const utilisateur = {
      nom: req.body.nom,
      prenom: req.body.prenom,
      adresse: req.body.adresse,
      codepostal: req.body.codepostal,
      ville: req.body.ville,
      email: req.body.email,
      sexe: req.body.sexe,
      login: req.body.login,
      password: req.body.password,
      telephone: req.body.telephone
    };

    Utilisateur.create(utilisateur)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the user."
        });
      });
  }).catch(err => {
    res.status(500).send({
      message: "Error checking for existing user with login=" + req.body.login
    });
  });
};
