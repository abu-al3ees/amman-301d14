'use strict'

const { response } = require('express');
// Application Dependencies
const express = require('express');
const pg = require('pg');

// Environment variables
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
// Utilize ExpressJS functionality to parse the body of the request
app.use(express.urlencoded({ extended: true }));
// Specify a directory for static resources
app.use(express.static('./public'));

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);

client.on('error', err => console.error(err));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// API Routes
// Root route - Display all the added tasks
app.get('/', getTasks);
// Get Task details by its ID
app.get('/tasks/:task_id', getSingleTask);

// Route to the add task form
app.get('/add', showForm);

// route to handle the add form request
app.post('/add', addTask);

app.get('*', (req, res) => res.status(404).send('This route does not exist'));

// HELPER FUNCTIONS

// Get all of the added tasks and send it back to the index template
function getTasks(request, response) {
  const selectTasksQuery = 'SELECT * FROM tasks;';
  client.query(selectTasksQuery).then((results => {
    response.render('index', { results: results.rows });
  })).catch(error => {
    handleError(error, response)
  });
}

// Display the add task template
function showForm(request, response) {
  response.render('pages/add-view');
}

// Insert a task into the DB and redirect the user to the index.ejs
function addTask(request, response) {
  // const title = request.body.title;
  // const description = request.body.description;
  // const category = request.body.category;
  // const contact = request.body.contact;
  // const status = request.body.status;

  // ES6 Deconstruction
  const { title, description, category, contact, status } = request.body;
  const sqlQuery = 'INSERT INTO tasks (title, description, category,contact, status) VALUES($1, $2, $3,$4,$5);';
  const safeValues = [title, description, category, contact, status];

  client.query(sqlQuery, safeValues).then(() => {
    response.redirect('/');
  }).catch(error => {
    handleError(error, response);
  });
}

function handleError(error, response) {
  response.render('pages/error-view', { error: error });
}

function getSingleTask(req, res) {
  const taskId = req.params.task_id;
  console.log(taskId);
  const sqlSelectQuery = 'SELECT * FROM tasks WHERE id=$1';
  const safeValues = [taskId];

  client.query(sqlSelectQuery, safeValues).then(results => {
    res.render('pages/detail-view', { result: results.rows });
  }).catch(error => {
    handleError(error, response);
  });

}
client.connect().then(() =>
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
);