// app.js
import express from 'express';

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

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


export default app;