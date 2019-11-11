const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
// This file empties the Music collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/music",
  // {
  //   useMongoClient: true
  // }
);
const musicSeed = [
  {
    albumCover: "shelter.png",
    title: "Shelter",
    file:"shelter.mp3",
    artist:"Porter Robinson, Madeon",
    tags:"edm, shelter",
    description:
      "New song called shelter.",
    date: new Date(Date.now())
  }
]

db.Music
 .remove({})
 .then(() => db.Music.collection.insert(musicSeed))
 .then(data => {
   console.log(data)
   console.log(data.insertedCount + " recorded!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });