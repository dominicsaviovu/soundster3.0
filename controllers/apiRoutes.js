// var mongoose = require("mongoose");

// var db = require("./../models");

// module.exports = function(app){

//   console.log("exporting properly")

//   // Route for getting all Portfolio items and profile information from the db
//   app.get("/api/renderPage", function(req, res) {

//     console.log("here in the renderPage route")

//     let promiseArray = [
//       db.Portfolio.find({}),
//       db.About.find({}),
//       db.Contact.find({})
//     ];

//     Promise.all(promiseArray).then(function(values) {
//       //console.log(promiseArray)
//         res.json({
//           portfolio: values[0],
//           about: values[1],
//           contacts: values[2]
//         });
//       }).catch(function(err) {
//         res.json(err);
//       });
//   });

//   //Route for grabbing a specific Portfolio item by id, populate it with it's note
//   //do not comment this out!
//   app.get("/portfolioModal/:id", function(req, res) {

//     db.Portfolio.findOne({ _id: req.params.id })
//       .then(function(dbPortfolio) {
//         res.json(dbPortfolio);
//       })
//       .catch(function(err) {
//         res.json(err);
//       });
//   });

//   //Route for getting all contacts
//   app.get("/contacts", function(req, res) {
//     db.Contact.find({})
//       .then(function(dbContacts){
//         res.json(dbContacts);
//       })
//       .catch(function(err) {
//         res.json(err);
//       });
//   });

//   // Route for adding a new contact 
//   app.post("/contacts", function(req, res) {

//     console.log(`Inside the /contact POST route.`)
//     console.log(req.body)

    
//     var data = {
//       from: req.body.email,
//       to: 'kovacic316@gmail.com',
//       subject: req.body.subject,
//       text: "Sender Name: " + req.body.name + " \n" + "Message: " + req.body.message,
//     };
 
//     db.Contact.create(req.body)
//       .then(function(dbContact) {
//         console.log("New Contact ID: " + dbContact._id)
//       })
//       .then(mailgun.messages().send(data, function (error, body) {
//         if(error){
//           console.log(error)
//         }else{
//           res.send(true)
//         }
//       }))
//       .catch(function(err) {
//         res.json(err);
//       });


    

      
//   });