const User = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;


// Read ----------------------------
exports.userInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
    
    User.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log("ID unknown : " + err);
    }).select("-password");
};

// exports.userInfo = (req, res, next) => {
    //     User.findOne({ _id: req.params.id })
    //         .then(user => res.status(200).json(( user )))
    //         .catch(error => res.status(404).json({ error }));
    // };
    
//  Update ----------------------------
// exports.updateUser = async (req, res) => {
//     if (!ObjectID.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);
    
//     try
//     {
//         await User.findOneAndUpdate(
//             {_id: req.params.id},
//             {
//                 $set: {
//                     adress: req.body.adress
//                 }
//             },
//             { new: true, upsert: true, setDefaultsOnInsert: true},
//             (err, docs )=> {
//                 if (!err) return res.send(docs);
//                 if (!err) return res.status(500).send({ message: err});
//             }
//             );
//     }
//     catch (err)
//     {
//         return res.status(500).json({ message:err });
//     } 
// };

exports.updateUser = (req, res, next) => {
    const UserObject = req.file ?
      {
        ...JSON.parse(req.body.user),
      } : { ...req.body };
    User.updateOne({ _id: req.params.id }, { ...UserObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Profil modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

// Delete  ----------------------------
exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
    
    try {
        await User.deleteOne({ _id: req.params.id }).exec();
        res.status(200).json({ message: "Successfully deleted. " });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

//  WishList  ----------------------------
// exports.wishList = async (req, res) => {
//     if (
//       !ObjectID.isValid(req.params.id) ||
//       !ObjectID.isValid(req.body.idToAddToList)
//     )
//       return res.status(400).send("ID unknown : " + req.params.id);
  
//     try {
//       await User.findByIdAndUpdate(
//         req.params.id,
//         { $addToSet: { wishList: req.params.idToItem } },
//         { new: true, upsert: true },
//         (err, docs) => {
//           if (err) return res.status(400).jsos(err);
//         }
//       );
//     } catch (err) {
//       return res.status(500).json({ message: err });
//     }
//   };
  
// exports.removeFromWishlist = async (req, res) => {
//   if (
//     !ObjectID.isValid(req.params.id) ||
//     !ObjectID.isValid(req.body.idToRemoveFromList)
//   )
//     return res.status(400).send("ID unknown : " + req.params.id);

//   try {
//     await User.findByIdAndUpdate(
//       req.params.id,
//       { $pull: { wishList: req.body.idToRemoveFromList } },
//       { new: true, upsert: true },
//       (err, docs) => {
//         if (!err) res.status(201).json(docs);
//         else return res.status(400).jsos(err);
//       }
//     );
//   } catch (err) {
//     return res.status(500).json({ message: err });
//   }
// };
