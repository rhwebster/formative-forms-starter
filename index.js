const express = require("express");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const router = express.Router();

const app = express();
const port = process.env.PORT || 3000; 
const csrfProtection = csrf({ cookie: true });

app.set("view engine", "pug");

app.use(cookieParser());

// const logTime = (req, res, next) => {
//   console.log("Current time: ", new Date().toISOString());
//   next();
// };

// app.get("/users", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/", (req,res) => {
  res.render("index", { users })
})

const users = [
  {
    id: 1,
    firstName: "Jill",
    lastName: "Jack",
    email: "jill.jack@gmail.com"
  }
];

app.get('/create', (req,res) => {
  res.render("create-form")
})

// app.post('/create', async (req,res) => {
//   res.render("create-form");

//   const { body: data } = req;

//   await users.create({
//     firstName: data.firstName,
//     lastName: data.lastName,
//     email: data.email,
//     password: data.password,
//     confirmedPassword: data.confirmedPassword
//   })

//   res.redirect('/create');
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
