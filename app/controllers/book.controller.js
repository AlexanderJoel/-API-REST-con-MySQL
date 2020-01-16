const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const book = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });    
  } else {
    Book.create(book)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};}


  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Book.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving books."
        });
      });
  };