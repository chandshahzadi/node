const user = require('../models/user');


const form = async (req, res) => {
  console.log('data received from reactjs');
  const obj = await user.collection.insertOne(
    { firstName: req.body.firstName, lastName: req.body.lastName, 
      semester: req.body.semester, dateOfBirth: req.body.dateOfBirth,
      address: req.body.address, phoneNumber: req.body.phoneNumber
    });
  res.json(obj);
  console.log("hjjhs", obj)
};

module.exports = { form }


