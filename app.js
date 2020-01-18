// app.js

//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request"); // tbc
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

var items = [];

app.get("/", function(req, res) {
  var today = new Date();
  // https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date?rq=1
  var dateOptions = {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
  };
  var timeOptions = {
    hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short'
  }
  var day = today.toLocaleDateString("en-US", dateOptions); // 9/17/2016
  var timeStamp = today.toLocaleDateString("en-US", timeOptions); // timestamp

  res.render("list", {
    kindOfDay: day, newListItems: items
  });
});

app.post("/", function(req, res) {
  item = req.body.field;
  console.log("Added: " + item);
  items.push(item);
  res.redirect("/");
});

app.listen(process.env.PORT || 3500, function() {
  console.log('Server is running on "process.env.PORT || 3500".')
});
