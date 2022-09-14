const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const user = require('../api/models/user');
const teacherLog = require('../api/models/teacherLog');
const mongodb = require('mongodb');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { raw } = require('express');


require('./db');

const app = express();
app.use(cors());

// parse application /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({ title: 'Hello World' });
});
app.post('/data', async (req, res) => {
    const data = req.body.data
    const obj = await user.collection.insertOne({
        firstName: data.firstName, lastName: data.lastName,
        semester: data.semester, dateOfBirth: data.dateOfBirth,
        address: data.address, phoneNumber: data.phoneNumber
    });
    res.json({ obj });
});
app.get('/student/:id', async (req, res) => {
    const student = await user.findOne({ _id: mongodb.ObjectId(req.params.id) });
    res.json({ student });
});
// 2nd get fun in table.tsx //
app.get('/students', async (req, res) => {
    let docs = await user.collection.find().toArray();
    res.json({ docs });
});

// 1st delete fun in table.tsx //
app.delete('/students/:_id', async (req, res) => {
    let del = await user.collection.deleteOne({ _id: mongodb.ObjectId(req.params._id) });
    res.json({ del })
}); 
app.post('/student/:id', async (req, res) => {
    const receive = await user.findByIdAndUpdate({ '_id': mongodb.ObjectId(req.params.id) }, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            semester: req.body.semester,
            dateOfBirth: req.body.dateOfBirth,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber
        }
    })
    res.json({ receive });
    console.log("findAndUpdate", receive)
})
//Data of teacher//
app.post('/raw', async (req, res) => {
    const raw  = req.body.raw;
    const receiveeee = await teacherLog.collection.insertOne({
        firstName: raw.firstName, lastName: raw.lastName,
        teacherId: raw.teacherId, room: raw.room
    });
    res.json({ receiveeee })
});
app.get("/teacher", async (req, res) => {
    let teacher = await teacherLog.collection.find().toArray();
    res.json({ teacher });
        console.log("raw getting from nodejs", teacher)
});
app.delete('/teacher/:_id', async (req, res) => {
    const del = req.params._id;
    console.log("del", del);
    let dele = await teacherLog.collection.deleteOne({ _id: mongodb.ObjectId(req.params._id) });
    res.json({ dele });
    console.log("delete method", dele);
});
app.get('/teacher/:id', async (req, res) => {
    const get = req.params.id;
    console.log("get", get);
})
routes(app);

app.listen(3002, () => {
    console.log('App started on http://localhost:3002');
});