// app.js
/* import express from 'express';


use require*/

const { calcNumberOfSpaces } = require('./calculator.js');

// Configuration constants
const PORT = 3000;
const VIEW_ENGINE = 'ejs';
const VIEWS_DIR = './views';

// Data generation function
const testDataForAppDevelopment = () => ({
});


// Create Express application
const app = express();

// View engine setup
app.set('views', VIEWS_DIR);
app.set('view engine', VIEW_ENGINE);

// Routes
app.get('/', (req, res) => {

});

app.post('/save', (req, res) => {
  const poles = Number(req.body.poles);
  const percentage = Number(req.body.percentage);
  const contacts = Number(req.body.contacts);
  
  saveToMemory(poles, percentage, contacts);
  const spaces = calcNumberOfSpaces(poles, percentage);
  
  res.send(`Saved! Calculated spaces: ${spaces}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


export default app;