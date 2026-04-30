var express = require('express');
var bodyParser = require('body-parser');
const client = require('prom-client');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

// 🔥 Enable metrics
client.collectDefaultMetrics();

// placeholder tasks
var task = [];
var complete = [];

// routes
app.post("/addtask", function(req, res) {
  var newTask = req.body.newtask;
  task.push(newTask);
  res.redirect("/");
});

app.post("/removetask", function(req, res) {
  var completeTask = req.body.check;

  if (typeof completeTask === "string") {
    complete.push(completeTask);
    task.splice(task.indexOf(completeTask), 1);
  } else {
    for (var i = 0; i < completeTask.length; i++) {
      complete.push(completeTask[i]);
      task.splice(task.indexOf(completeTask[i]), 1);
    }
  }

  res.redirect("/");
});

app.get("/", function (req, res) {
  res.render("index", { task: task, complete: complete });
});

// 🔥 IMPORTANT: metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// start server
app.listen(8080, function() {
  console.log('App running on port 8080');
});