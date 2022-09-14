const teacherLog = require('../models/teacherLog');


const addNewTeacher = async () => {
    console.log("teacher coming from nodejs")
    const obj = await teacherLog.collection.insertOne(
        {
            firstName: req.body.firstName, lastName: req.body.lastName,
            teacherId: req.body.teacherId, room: req.body.room
        });
    res.json(obj)
    
};
module.exports = { addNewTeacher }