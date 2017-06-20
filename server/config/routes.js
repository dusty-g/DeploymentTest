let users = require("../controllers/users.js")
let path = require("path")
module.exports = (app)=>{
  app.get('/users', users.getAllUsers)
  app.post("/new", users.createUser)
  app.all("*", (reqest, response, next)=>{
    response.sendFile(path.resolve("./public/dist/index.html"))
  })
}