const {login} = require("./controllers/authorization");
const { form } = require("./controllers/students");
const { addNewTeacher } = require("./controllers/teachers");



const routes = (app) => {
    app.post("/authorization/login", login)
    app.post("/students/form", form)
    app.post("/teachers/addNewTeacher", addNewTeacher);
}
module.exports = routes;    