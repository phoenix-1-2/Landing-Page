const path = require('path');

let ContactModel = require('../models/contact.model')

exports.get_landing = function(req, res, next) {
    res.sendFile('index.html', { root: 'views' });
}


exports.get_success_contact = function(req, res, next) {
  res.sendFile('success_contact.html', { root: 'views' });
}


exports.post_contact = function(req, res, next) {

    if(!req.body) {
        return ;
    }
    
    if(!req.body.email) {
        return;
    }
    let model = new ContactModel(req.body);
    model.save()
      .then(doc => {
        if(!doc || doc.length === 0) {
          return res.status(500).send(doc)
        }
          res.status(201).send(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })


      return res.redirect('/success-contact');
}