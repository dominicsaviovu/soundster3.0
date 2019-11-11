var express = require('express')
var router = express.Router();
const musicController = require("../../controllers/musicController");

var app = express()


// router.route("/")
//   .get(musicController.findAll)
//   // .post(musicController.create);

//   console.log("test music.js")

// router
//   .route("/upload/api")
//   .get(musicController.create)
// module.exports = router;

// router.get("/upload/api", function(req, res) {
// 	res.send("about birds")
// })

// router.get("/", function(req, res) {
// 	res.send("about birds")
// })

// app.get('/upload/api', function (req, res) {
//   res.send('GET request to the homepage')
// })

module.exports = router;