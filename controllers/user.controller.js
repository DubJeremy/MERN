const User = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;


// Read -----------------

// exports.userInfo = (req, res) => {
//     console.log(req.params);
//     if (!ObjectID.isValid(req.params.id))
//       return res.status(400).send("ID unknown : " + req.params.id);
  
//     User.findById(req.params.id, (err, docs) => {
//       if (!err) res.send(docs);
//       else console.log("ID unknown : " + err);
//     }).select("-password");
// };

exports.userInfo = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.status(200).json(( user )))
        .catch(error => res.status(404).json({ error }));
};
